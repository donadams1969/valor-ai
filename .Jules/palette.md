## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-03 - Scrollable Region Accessibility
**Learning:** Custom scrollable containers (logs, terminals, code blocks) in this app often lack `tabIndex={0}`, `role`, and accessible labels, making them inaccessible to keyboard and screen reader users.
**Action:** Audit all `overflow-auto` or `overflow-scroll` containers and ensure they have keyboard focus support and appropriate ARIA roles/labels.
