## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-02 - Dynamic Terminal Logs
**Learning:** The "Verification Terminal" (and similar console interfaces in this app) uses `div` elements to display real-time updates. Without semantic roles, these updates are silent for screen reader users.
**Action:** Apply `role="log"` and `aria-live="polite"` to any terminal-style output containers to ensure dynamic content is announced.

## 2025-05-02 - Semantic Landmarks
**Learning:** The application structure relies heavily on generic `div` wrappers. Providing a `<main>` landmark allows screen reader users to bypass navigation and jump directly to the primary content.
**Action:** Ensure the primary content area is wrapped in a `<main>` tag.
