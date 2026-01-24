## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Scrollable Regions Keyboard Accessibility
**Learning:** Scrollable regions (like logs or code blocks) are inaccessible to keyboard users unless they have `tabIndex={0}`. Adding `role="log"` to live logs provides correct announcements for screen readers.
**Action:** Ensure all `overflow-auto` or `overflow-scroll` containers are focusable and labeled.
