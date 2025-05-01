![Blockchain Anchored](https://img.shields.io/badge/Immutable%20Ledger-Blockchain%20Sealed-brightgreen)
![Whistleblower Safe Harbor](https://img.shields.io/badge/Protected%20Speech-ADA%20&%20FTCA-blue)

#!/usr/bin/env python3
"""
verify.py – VALOR AI evidence-hash verifier

CLI utility that reads a `VALOR-genesis.json` (or any similarly
formatted manifest) and verifies that every file listed in the manifest
is present on disk **and** matches its recorded SHA-256 digest.

Usage:
    valor-verify proof/VALOR-genesis.json         # verify all files
    valor-verify proof/VALOR-genesis.json README.md  # subset

Exit status 0 when all checks pass, 1 otherwise.
"""

import argparse
import hashlib
import json
import sys
from pathlib import Path
from datetime import datetime, timezone


def sha256(path: Path) -> str:
    """Compute SHA-256 digest of a file."""
    h = hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda: f.read(8192), b''):
            h.update(chunk)
    return h.hexdigest()


def load_manifest(path: Path) -> dict:
    """Load and parse the JSON manifest."""
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception as e:
        sys.exit(f"[FATAL] Unable to load manifest {path}: {e}")


def check_timestamp(ts: str) -> None:
    """Validate RFC3339 timestamp; warn if future or malformed."""
    try:
        dt = datetime.fromisoformat(ts.replace('Z', '+00:00'))
        if dt > datetime.now(timezone.utc):
            print(f"[WARN] Manifest timestamp is in the future: {ts}")
    except Exception:
        print(f"[WARN] Invalid timestamp format: {ts}")


def verify_manifest(manifest: Path, targets: list[Path]) -> bool:
    data = load_manifest(manifest)

    # Self-integrity check
    raw_hash = data.get('genesis_hash', '')
    if raw_hash.startswith('sha256:'):
        expected = raw_hash.split(':',1)[1]
        actual = sha256(manifest)
        if expected != actual:
            print(f"[FAIL] Manifest hash mismatch!\n  expected {expected}\n  actual   {actual}")
            return False

    # Timestamp
    if ts := data.get('timestamp'):
        check_timestamp(ts)

    # Build map of declared files
    file_map = {Path(entry['path']): entry['sha256'] for entry in data.get('files', [])}

    # Determine targets
    check_paths = targets or list(file_map.keys())
    all_ok = True

    for p in check_paths:
        if p not in file_map:
            print(f"[WARN] '{p}' not in manifest; skipping.")
            continue
        if not p.exists():
            print(f"[FAIL] Missing: {p}")
            all_ok = False
            continue
        expect = file_map[p]
        actual = sha256(p)
        if expect != actual:
            print(f"[FAIL] {p} hash mismatch!\n  expected {expect}\n  actual   {actual}")
            all_ok = False
        else:
            print(f"[OK]   {p}")
    return all_ok


def main():
    parser = argparse.ArgumentParser(
        prog='valor-verify',
        description='Verify VALOR-AI evidence hashes via manifest.'
    )
    parser.add_argument('manifest', type=Path, help='Path to JSON manifest')
    parser.add_argument('paths', nargs='*', type=Path, help='Specific file paths to check')
    args = parser.parse_args()

    success = verify_manifest(args.manifest, args.paths)
    sys.exit(0 if success else 1)


if __name__ == '__main__':
    main()


    
