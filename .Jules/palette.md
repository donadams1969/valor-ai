## 2024-05-23 - Accessibility of Dynamic Logs
**Learning:** Dynamic log containers that update frequently (like terminal simulations) must have `role="log"` and `aria-live="polite"` to ensure screen reader users are aware of new entries without being interrupted constantly.
**Action:** Always check "terminal" or "log" style components for proper ARIA roles to ensure they are accessible.

## 2024-05-23 - Labeling Progress Bars
**Learning:** `Progress` components often lack visible labels that are programmatically associated with the element.
**Action:** Use `aria-label` on `Progress` components when the label is visual-only or separated by layout, ensuring screen readers can announce the purpose of the progress bar.
