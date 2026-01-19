export class CryptoSimulator {
  private privateKey: CryptoKey | null = null
  private publicKey: CryptoKey | null = null

  async generateKeys(): Promise<void> {
    const keyPair = await window.crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256",
      },
      true,
      ["sign", "verify"],
    )

    this.privateKey = keyPair.privateKey
    this.publicKey = keyPair.publicKey
  }

  async sign(data: string): Promise<string> {
    if (!this.privateKey) {
      throw new Error("Private key not initialized")
    }

    const signature = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" },
      },
      this.privateKey,
      new TextEncoder().encode(data),
    )

    return this.arrayBufferToHex(signature)
  }

  async verify(signatureHex: string, data: string): Promise<boolean> {
    if (!this.publicKey) {
      throw new Error("Public key not initialized")
    }

    try {
      const signature = this.hexToArrayBuffer(signatureHex)
      return await window.crypto.subtle.verify(
        {
          name: "ECDSA",
          hash: { name: "SHA-256" },
        },
        this.publicKey,
        signature,
        new TextEncoder().encode(data),
      )
    } catch (error) {
      console.error("Verification error:", error)
      return false
    }
  }

  private arrayBufferToHex(buffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  }

  private hexToArrayBuffer(hex: string): ArrayBuffer {
    const bytes = new Uint8Array(hex.length / 2)
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = Number.parseInt(hex.substr(i, 2), 16)
    }
    return bytes.buffer
  }
}
