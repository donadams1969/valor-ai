![1000009240](https://github.com/user-attachments/assets/768759e0-6241-46d6-bb1e-23e9756ab70a)


![Blockchain Anchored](https://img.shields.io/badge/Immutable%20Ledger-Blockchain%20Sealed-brightgreen)
![Whistleblower Safe Harbor](https://img.shields.io/badge/Protected%20Speech-ADA%20&%20FTCA-blue)

VALOR AI Evidence Hash Verifier

This CLI utility reads a `VALOR-genesis.json` manifest (or similarly structured manifest file),
verifies that each file listed is present locally, and confirms each file matches its recorded SHA-256 hash.

Usage:
    ./verify.py proof/VALOR-genesis.json               
Exit Codes:
    0 – All checks pass
    1 – Verification failed

import argparse
import hashlib
import json
import sys
from pathlib import Path
from datetime import datetime, timezone


def compute_sha256(filepath: Path) -> str:
    Calculate and return SHA-256 hash of a given file.
    hash_sha256 = hashlib.sha256()
    try:
        with filepath.open('rb') as file:
            while chunk := file.read(8192):
                hash_sha256.update(chunk)
    except OSError as err:
        sys.exit(f"[FATAL] Error reading {filepath}: {err}")
    return hash_sha256.hexdigest()

def parse_manifest(manifest_file: Path) -> dict:
    Parse and load JSON data from the manifest file.
    try:
        return json.loads(manifest_file.read_text(encoding='utf-8'))
    except (json.JSONDecodeError, OSError) as err:
        sys.exit(f"[FATAL] Unable to parse manifest {manifest_file}: {err}")


def check_timestamp(timestamp_str: str):
    Validate RFC3339 timestamp and warn if invalid or future-dated.
    try:
        parsed_timestamp = datetime.fromisoformat(timestamp_str.rstrip('Z')).replace(tzinfo=timezone.utc)
        if parsed_timestamp > datetime.now(timezone.utc):
            print(f"[WARN] Manifest timestamp {timestamp_str} is set in the future.")
    except ValueError:
        print(f"[WARN] Invalid timestamp format detected: {timestamp_str}")

def verify_manifest_hash(manifest: dict, manifest_path: Path) -> bool:
    Ensure manifest's recorded hash matches its current SHA-256 hash.
    recorded_hash = manifest.get('genesis_hash', '').replace('sha256:', '')
    current_hash = compute_sha256(manifest_path)

    if recorded_hash != current_hash:
        print(f"[FAIL] Manifest hash mismatch:\n Expected: {recorded_hash}\n Actual:   {current_hash}")
        return False

    print("[OK] Manifest hash verified.")
    return True

def verify_files(manifest: dict, file_paths: list[Path]) -> bool:
    Check the SHA-256 hash for each listed file against the manifest.
    all_verified = True
    file_hashes = {Path(item['path']): item['sha256'] for item in manifest.get('files', [])}

    targets = file_paths if file_paths else file_hashes.keys()

    for file_path in targets:
        if file_path not in file_hashes:
            print(f"[WARN] '{file_path}' not found in manifest; skipping.")
            continue

        if not file_path.exists():
            print(f"[FAIL] File missing: {file_path}")
            all_verified = False
            continue

        actual_hash = compute_sha256(file_path)
        expected_hash = file_hashes[file_path]

        if actual_hash == expected_hash:
            print(f"[OK] {file_path} verified successfully.")
        else:
            print(f"[FAIL] Hash mismatch for {file_path}:\n Expected: {expected_hash}\n Actual:   {actual_hash}")
            all_verified = False

    return all_verified

def main():
    parser = argparse.ArgumentParser(description="VALOR AI Manifest File Hash Verifier")
    parser.add_argument("manifest", type=Path, help="Path to the VALOR-genesis.json manifest")
    parser.add_argument("files", nargs="*", type=Path, help="Optional specific files to verify")

    args = parser.parse_args()

    manifest = parse_manifest(args.manifest)
    check_timestamp(manifest.get("timestamp", ""))

    manifest_integrity_ok = verify_manifest_hash(manifest, args.manifest)
    files_verified_ok = verify_files(manifest, args.files)

    if manifest_integrity_ok and files_verified_ok:
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == __main__:
    main()

![1000009692](https://github.com/user-attachments/assets/73361050-093d-49e0-a4ea-a937a8d0392e)

