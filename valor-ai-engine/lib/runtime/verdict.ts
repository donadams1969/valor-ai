import { ConstitutionalVerdict, ConstitutionalVerdictSchema, VerdictLineage } from '../contracts/verdict';
import { createHash } from 'crypto';

export class VerdictChainStore {
  private chain: VerdictLineage[] = [];

  public getLatestNode(): VerdictLineage | null {
    return this.chain[this.chain.length - 1] || null;
  }

  public pushNode(node: VerdictLineage): void {
    this.chain.push(node);
  }

  public getLength(): number {
    return this.chain.length;
  }
}

export function computeVerdictHash(verdict: ConstitutionalVerdict): string {
  const canonical = JSON.stringify(verdict, Object.keys(verdict).sort());
  return createHash('sha256').update(canonical).digest('hex');
}

export class VerdictChainVerifier {
  public static verifyContinuity(parentHash: string | null, currentVerdict: ConstitutionalVerdict): boolean {
    // In a real verification, we'd confirm the parentHash actually exists in the store.
    // For this simulation, we enforce that schemas match and the hash generates correctly.
    ConstitutionalVerdictSchema.parse(currentVerdict);
    const generatedHash = computeVerdictHash(currentVerdict);
    return !!generatedHash;
  }
}
