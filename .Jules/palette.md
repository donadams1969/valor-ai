## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-24 - Live Region Accessibility
**Learning:** Live-updating text areas (like logs) need `role="log"`, `aria-live="polite"`, `tabIndex={0}`, and visible focus styles to be accessible to screen readers and keyboard users.
**Action:** Apply these attributes to any dynamic log or terminal component.
