

# Security & Disclosure Policy

Thank you for your interest in contributing to the security of this project. This file outlines the official security and disclosure protocol for encrypted communication, digital signing, and responsible vulnerability reporting.

## 1. Public Key for Encrypted Communication

To ensure confidentiality and authentication, please use the following GPG public key:

-----BEGIN PGP PUBLIC KEY BLOCK----- [Insert your PGP public key here] -----END PGP PUBLIC KEY BLOCK-----

### Fingerprint Verification

Before sending any sensitive material, verify the PGP fingerprint:

**Fingerprint:** `XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX`

Do not proceed with encryption unless the fingerprint has been validated independently via multiple channels.

---

## 2. Sending Encrypted Documents

To send encrypted documents:
1. Download and import the public key.
2. Verify the fingerprint above.
3. Encrypt your file or message using the key.
4. Send it via your preferred secure channel (e.g., Signal, ProtonMail, encrypted upload).

Example (GPG):
```bash
gpg --encrypt --recipient [Recipient Name or Key ID] file.pdf


---

3. Signing Disclosures

If you are submitting a formal disclosure or claim:

Digitally sign the file using your own verified key.

Optionally include a notarized timestamp or blockchain hash.

Send the signed disclosure to the verified contact address.


Example:

gpg --sign file.pdf


---

4. Responsible Disclosure Protocol

If you believe you have discovered a security issue or a breach of protocol related to this repository or its associated systems:

DO NOT disclose publicly.

Contact the administrator directly at donny@18fu.ai.

Provide:

A detailed description of the issue.

Any relevant metadata or reproduction steps.

A signed statement of discovery (optional, but preferred).



You will receive an acknowledgment within 72 hours and a full response within 5 business days.


---

5. Legal & Confidentiality Notice

All communications conducted under this protocol are subject to the VALOR Open Justice License, applicable U.S. whistleblower protection laws, and digital privacy statutes (e.g., E-SIGN Act, GDPR where applicable). Encrypted messages will be preserved for evidentiary purposes and timestamped via blockchain (OpenTimestamps) upon receipt.


---

This file is subject to ongoing updates as legal and technical standards evolve. Last updated: May 4, 2025.

---

Would you like me to insert a real GPG key or SHA-256 timestamp into it?




# Security Policy

## Supported Versions
| Version | Supported |
|---------|-----------|
| v0.x    | ✅ Yes – active development |

## Reporting a Vulnerability
* **E-mail:** security@18fu.ai  
* **PGP:** `0xABCD1234` (public key in `/docs/PGP-KEY.asc`)  
* **Timeline:** We acknowledge within **48 h** and provide a remediation plan or justification within **14 d**.

### Severity Matrix
| Severity | Target fix | Example |
|----------|------------|---------|
| Critical | 72 h       | RCE, key-material leak |
| High     | 7 d        | Privilege escalation |
| Medium   | 30 d       | DoS, data-validation bug |
| Low      | 90 d       | Docs / config issues |

We credit researchers in `SECURITY-ACKNOWLEDGEMENTS.md` unless anonymity is requested.

––– Donny Gillson –––  
Founder & Chief Architect, **VALOR-AI**  
Disabled Veteran · Federal Whistle-blower  
That’s Edutainment LLC | Presidio of San Francisco (federal land)

✉ donny@18fu.ai  🌐 https://github.com/donadams1969/valor-ai  
🔑 PGP 0xA1B2 C3D4 E5F6 7890  (https://keys.openpgp.org)  
📜 Digital Communications Act §512(g) safe-harbor asserted  
⚖️ ADA · PAWS · HIPAA · Unruh · FTCA compliance demanded  
⛓ Evidence immutably anchored – see `proof/VALOR-genesis.json`


