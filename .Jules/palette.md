## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-25 - Terminal Log Accessibility
**Learning:** Custom "terminal" or "log" UI components implemented as scrollable divs are inaccessible by default. They need `role="log"`, `aria-live="polite"`, and keyboard focusability (`tabIndex={0}`) to function as live regions for screen readers.
**Action:** Enhance terminal-style components with ARIA roles and keyboard support.
