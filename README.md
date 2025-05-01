![Blockchain Anchored](https://img.shields.io/badge/Immutable%20Ledger-Blockchain%20Sealed-brightgreen)
![Whistleblower Safe Harbor](https://img.shields.io/badge/Protected%20Speech-ADA%20&%20FTCA-blue)

#!/usr/bin/env python3
"""
verify.py – VALOR AI evidence-hash verifier

CLI utility that reads a `VALOR-genesis.json` (or similarly
formatted manifest) and verifies that every file listed in the manifest
is present on disk and matches its recorded SHA-256 digest.

Usage:
    ./verify.py proof/VALOR-genesis.json              # verify all files
    ./verify.py proof/VALOR-genesis.json README.md    # verify specific files

Exit status: 0 when all checks pass, 1 otherwise.
"""

import argparse
import hashlib
import json
import sys
from pathlib import Path
from datetime import datetime, timezone


def sha256(path: Path) -> str:
    """Compute SHA-256 digest of a file."""
    hasher = hashlib.sha256()
    with path.open('rb') as file:
        while chunk := file.read(8192):
            hasher.update(chunk)
    return hasher.hexdigest()


def load_manifest(manifest_path: Path) -> dict:
    """Load and parse the JSON manifest file."""
    try:
        return json.loads(manifest_path.read_text(encoding='utf-8'))
    except json.JSONDecodeError as err:
        sys.exit(f"[FATAL] JSON decoding error in {manifest_path}: {err}")
    except OSError as err:
        sys.exit(f"[FATAL] Error reading manifest {manifest_path}: {err}")


def validate_timestamp(ts: str) -> None:
    """Validate RFC3339 timestamp; issue warnings if timestamp is invalid or in the future."""
    try:
        timestamp = datetime.fromisoformat(ts.replace('Z', '+00:00'))
        if timestamp > datetime.now(timezone.utc):
            print(f"[WARN] Manifest timestamp {ts} is in the future.")
    except ValueError:
        print(f"[WARN] Invalid timestamp format: {ts}")


def verify_files(manifest: dict, targets: list[Path]) -> bool:
    """Verify file hashes based on the provided manifest."""
    all_valid = True
    manifest_files = {Path(entry['path']): entry['sha256'] for entry in manifest.get('files', [])}

    for path in targets or manifest_files.keys():
        if path not in manifest_files:
            print(f"[WARN] File '{path}' not listed in manifest; skipping.")
            continue

        if not path.exists():
            print(f"[FAIL] Missing file: {path}")
            all_valid = False
            continue

        expected_hash = manifest_files[path]
        actual_hash = sha256(path)

        if actual_hash != expected_hash:
            print(f"[FAIL] Hash mismatch for {path}:\n  expected {expected_hash}\n  actual   {actual_hash}")
            all_valid = False
        else:
            print(f"[OK] Verified {path}")

    return all_valid


def verify_manifest_integrity(manifest: dict, manifest_path: Path) -> bool:
    """Check if manifest's recorded hash matches its actual SHA-256 digest."""
    recorded_hash = manifest.get('genesis_hash', '').removeprefix('sha256:')
    actual_hash = sha256(manifest_path)

    if recorded_hash and recorded_hash != actual_hash:
        print(f"[FAIL] Manifest hash mismatch:\n  expected {recorded_hash}\n  actual   {actual_hash}")
        return False

    return True


def main():
    parser = argparse.ArgumentParser(description="Verify VALOR-AI evidence hashes.")
    parser.add_argument('manifest', type=Path, help="Path to the VALOR-genesis.json manifest.")
    parser.add_argument('paths', nargs='*', type=Path, help="Specific file paths to verify.")
    args = parser.parse_args()

    manifest_data = load_manifest(args.manifest)
    validate_timestamp(manifest_data.get('timestamp', ''))

    manifest_ok = verify_manifest_integrity(manifest_data, args.manifest)
    files_ok = verify_files(manifest_data, args.paths)

    if not manifest_ok or not files_ok:
        sys.exit(1)
    sys.exit(0)


if __name__ == '__main__':
    main()
