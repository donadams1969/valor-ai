import { RuntimeEvidence, RuntimeSnapshot, RuntimeSnapshotSchema } from '../contracts/schema';
import { verifyInvariant } from './verification';
import { createHash } from 'crypto';

export function computeSnapshotHash(snapshot: RuntimeSnapshot): string {
    const canonical = JSON.stringify(snapshot, Object.keys(snapshot).sort());
    return createHash('sha256').update(canonical).digest('hex');
}

export function buildEvidenceBundle(snapshotData: Omit<RuntimeSnapshot, 'observedAt'>): RuntimeEvidence {
    const snapshot: RuntimeSnapshot = {
        ...snapshotData,
        observedAt: new Date().toISOString()
    };

    // Contract Schema validation
    RuntimeSnapshotSchema.parse(snapshot);

    // System Law Enforcement: No verification -> no evidence
    const verification = verifyInvariant(snapshot);
    if (!verification.verified) {
        throw new Error(`Runtime Verification Failed: ${verification.reasons.map(r => r.rationale).join('; ')}`);
    }

    // Hash evidence
    const hash = computeSnapshotHash(snapshot);

    return {
        snapshot,
        hash
    };
}
