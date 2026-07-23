import { z } from "zod";

export const TraceContextSchema = z.object({
  traceId: z.string(),
  spanId: z.string(),
  parentSpanId: z.string().optional(),
});

export const RuntimeReasonSchema = z.object({
  source: z.string(),
  rationale: z.string(),
});

export const WCAGAssertionSchema = z.object({
  id: z.string(),
  passed: z.boolean(),
  rule: z.string(),
});

export const RuntimeMetricsSchema = z.object({
  driftEvents: z.number(),
  operationalStatus: z.number(),
  violationsResolved: z.number(),
});

export const RuntimeSnapshotSchema = z.object({
  traceId: z.string(),
  decision: z.enum(["allow", "deny", "hold"]),
  metrics: RuntimeMetricsSchema,
  accessibilityMode: z.string(),
  observedAt: z.string(),
  reasons: z.array(RuntimeReasonSchema),
  wcagAssertions: z.array(WCAGAssertionSchema),
});

export const RuntimeEvidenceSchema = z.object({
  snapshot: RuntimeSnapshotSchema,
  hash: z.string(),
  signature: z.string().optional(),
});

export type TraceContext = z.infer<typeof TraceContextSchema>;
export type RuntimeReason = z.infer<typeof RuntimeReasonSchema>;
export type WCAGAssertion = z.infer<typeof WCAGAssertionSchema>;
export type RuntimeMetrics = z.infer<typeof RuntimeMetricsSchema>;
export type RuntimeSnapshot = z.infer<typeof RuntimeSnapshotSchema>;
export type RuntimeEvidence = z.infer<typeof RuntimeEvidenceSchema>;
