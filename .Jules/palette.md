## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2026-01-25 - Scrollable Region Accessibility
**Learning:** Elements with `overflow: auto` or `scroll` are not keyboard accessible by default. They require `tabIndex={0}` to allow keyboard users to focus and scroll them, along with a descriptive `aria-label`.
**Action:** Audit all scrollable containers (logs, code blocks) for `tabIndex={0}` and focus styles.
