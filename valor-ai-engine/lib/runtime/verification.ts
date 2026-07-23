import { RuntimeSnapshot, RuntimeReason } from '../contracts/schema';

export interface VerificationResult {
  verified: boolean;
  score: number;
  reasons: RuntimeReason[];
}

export function verifyInvariant(snapshot: RuntimeSnapshot): VerificationResult {
  const reasons: RuntimeReason[] = [];
  let score = 100;
  let verified = true;

  // Invariant 1: If violations are resolved, status must be nominal
  if (snapshot.metrics.violationsResolved > 0 && snapshot.metrics.operationalStatus < 100) {
    verified = false;
    score -= 50;
    reasons.push({ source: 'Invariant Engine', rationale: 'Operational status mismatch relative to resolved violations' });
  }

  // Invariant 2: Accessibility must be adaptive/enabled
  if (snapshot.accessibilityMode === 'off') {
    verified = false;
    score -= 50;
    reasons.push({ source: 'Accessibility Engine', rationale: 'A11y mode is off; adaptive behavior invariant failed' });
  }

  // Invariant 3: WCAG Assertions must all pass
  if (snapshot.wcagAssertions.some(a => !a.passed)) {
    verified = false;
    score -= 20;
    reasons.push({ source: 'A11y Assertions', rationale: 'One or more WCAG assertions failed verification' });
  }

  return { verified, score, reasons };
}
