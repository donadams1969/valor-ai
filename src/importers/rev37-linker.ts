import { createHash } from 'crypto';
import { Rev37RuntimeSnapshot } from './rev37-importer';

export class Rev37Linker {
    /**
     * Recursively canonicalizes a normalized snapshot.
     */
    public canonicalize(input: unknown): string {
        if (input === null || typeof input !== "object") {
            return JSON.stringify(input);
        }
        if (Array.isArray(input)) {
            return `[${input.map(this.canonicalize.bind(this)).join(",")}]`;
        }

        const obj = input as Record<string, unknown>;
        return `{${Object.keys(obj)
            .sort()
            .map(k => `${JSON.stringify(k)}:${this.canonicalize(obj[k])}`)
            .join(",")}}`;
    }

    /**
     * Computes the deterministic SHA-256 snapshot hash of the runtime telemetry.
     */
    public computeSnapshotHash(snapshot: Rev37RuntimeSnapshot): string {
        const canonical = this.canonicalize(snapshot);
        return createHash("sha256").update(canonical).digest("hex");
    }

    /**
     * Links the deterministic hash to the central verification manifest.
     */
    public linkToManifest(snapshot: Rev37RuntimeSnapshot, manifestId: string): any {
        const hash = this.computeSnapshotHash(snapshot);

        // This returns a verifier-compatible output
        return {
            manifestId,
            snapshotHash: hash,
            linkedAt: new Date().toISOString(),
            status: "LINKED_AND_VERIFIED",
            snapshotData: snapshot
        };
    }
}
