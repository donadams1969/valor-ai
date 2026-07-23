import { z } from "zod";

export const ConstitutionalVerdictSchema = z.object({
  id: z.string(),
  governanceHash: z.string(),
  receiptHash: z.string(),
  decision: z.enum(["ADMIT", "REJECT", "HOLD"]),
  timestamp: z.string(),
  signatures: z.array(z.string())
});

export const VerdictLineageSchema = z.object({
  currentVerdict: ConstitutionalVerdictSchema,
  parentVerdictHash: z.string().nullable(),
  topologyIndex: z.number()
});

export type ConstitutionalVerdict = z.infer<typeof ConstitutionalVerdictSchema>;
export type VerdictLineage = z.infer<typeof VerdictLineageSchema>;
