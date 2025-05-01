![Blockchain Anchored](https://img.shields.io/badge/Immutable%20Ledger-Blockchain%20Sealed-brightgreen)
![Whistleblower Safe Harbor](https://img.shields.io/badge/Protected%20Speech-ADA%20&%20FTCA-blue)


verify.py – VALOR AI evidence-hash verifier
================================================
CLI utility that reads a `VALOR-genesis.json` (or any similarly
formatted manifest) and verifies that every file listed in the manifest
is present on disk **and** matches its recorded SHA-256 digest.

Usage
-----
bash
python verify.py proof/VALOR-genesis.json            # verify all files
python verify.py proof/VALOR-genesis.json README.md  # verify a subset


Exit status is **0** when all requested verifications pass, **1**
otherwise – allowing easy wiring into CI pipelines.

The manifest schema
-------------------
```
{
  "genesis_hash": "sha256:<64-char digest>",
  "timestamp":    "2025-04-30T10:00:00Z",   # RFC-3339
  "creator":      "Donny Gillson",
  "organization": "That's Edutainment, LLC",
  "protocol":     "VALOR-AI Genesis",
  "valorchain_node": "GENESIS-BLOCK-001",
  "files": [{
      "path":   "README.md",
      "sha256": "<64-char digest>"
  }]
}
```
The tool ignores any keys it doesn’t recognize, so you can extend the
schema freely (e.g. add `signature`, `block_number`, …).
"""

from __future__ import annotations

import argparse
import hashlib
import json
import sys
from pathlib import Path
from datetime import datetime, timezone


def _sha256(path: Path) -> str:
    """Return the hex‐encoded SHA-256 digest of *path*."""
    h = hashlib.sha256()
    with path.open("rb") as fp:
        for chunk in iter(lambda: fp.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()


def _load_manifest(manifest_path: Path) -> dict:
    try:
        with manifest_path.open("r", encoding="utf-8") as fp:
            data = json.load(fp)
        return data
    except (json.JSONDecodeError, OSError) as exc:
        sys.exit(f"[FATAL] Cannot read manifest {manifest_path}: {exc}")


def _check_timestamp(ts_str: str) -> bool:
    try:
        ts = datetime.fromisoformat(ts_str.replace("Z", "+00:00"))
    except ValueError:
        print(f"[WARN] Timestamp not RFC-3339: {ts_str}")
        return False
    if ts > datetime.now(timezone.utc):
        print(f"[WARN] Timestamp is in the future: {ts_str}")
        return False
    return True


def verify(manifest_path: Path, targets: list[Path] | None = None) -> bool:
    data = _load_manifest(manifest_path)

    # Optional manifest self-integrity check
    expected_manifest_hash = data.get("genesis_hash", "").removeprefix("sha256:")
    actual_manifest_hash = _sha256(manifest_path)
    if expected_manifest_hash and expected_manifest_hash != actual_manifest_hash:
        print("[FAIL] Manifest hash mismatch → this manifest may have been tampered with!"
              f"\n       expected {expected_manifest_hash}\n       actual   {actual_manifest_hash}")
        return False

    _check_timestamp(data.get("timestamp", ""))

    # Build lookup table from manifest
    manifest_files = {Path(entry["path"]): entry["sha256"] for entry in data.get("files", [])}

    # Decide which files to verify
    if not targets:
        targets = list(manifest_files.keys())
    success = True
    for path in targets:
        if path not in manifest_files:
            print(f"[WARN] {path} not found in manifest – skipping")
            continue
        if not path.exists():
            print(f"[FAIL] {path} missing on disk")
            success = False
            continue
        expected = manifest_files[path]
        actual = _sha256(path)
        if expected != actual:
            print(f"[FAIL] {path} hash mismatch\n       expected {expected}\n       actual   {actual}")
            success = False
        else:
            print(f"[OK]   {path}")
    return success


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Verify VALOR-AI evidence hashes")
    parser.add_argument("manifest", type=Path, help="Path to VALOR-genesis.json")
    parser.add_argument("files", nargs="*", type=Path, help="Optional subset of file paths to verify")
    args = parser.parse_args()

    ok = verify(args.manifest, args.files or None)
    sys.exit(0 if ok else 1)
