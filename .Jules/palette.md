## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2026-01-26 - Accessible Scrollable Regions
**Learning:** Scrollable containers (like logs or code blocks) are inaccessible to keyboard users unless they have `tabIndex={0}`, `role` (like "log" or "region"), and an accessible label.
**Action:** Ensure all scrollable `div` or `pre` elements include `tabIndex={0}`, `aria-label`, and visible focus indicators.
