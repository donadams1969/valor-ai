## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-20 - Scrollable Region Accessibility
**Learning:** Scrollable containers (like logs or code blocks) are unreachable by keyboard unless they have `tabIndex={0}`. They also need `aria-label` for context and visible focus indicators for sighted keyboard users.
**Action:** Add `tabIndex={0}`, `aria-label`, and `focus-visible` classes to any `div` or `pre` with `overflow: auto/scroll`.
