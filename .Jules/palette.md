## 2025-05-23 - [Improved Accessibility on Icon-Only Button]
**Learning:** Icon-only buttons (like "Copy") are a common accessibility trap. Without `aria-label`, screen readers ignore them. Visual feedback (changing icon) is also crucial for confirmation.
**Action:** Always wrap icon-only buttons in a Tooltip, provide a clear `aria-label` (that updates with state if possible), and use temporary icon swaps for immediate feedback.
