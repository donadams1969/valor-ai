## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-03 - Live-Updating Terminal Accessibility
**Learning:** Live-updating logs (like terminals) need `role="log"`, `aria-live="polite"`, and visible focus styles to be accessible and usable. `dangerouslySetInnerHTML` should be avoided for security.
**Action:** Always wrap log outputs in a semantic container with proper ARIA roles and ensure keyboard focusability for scrollable areas.
