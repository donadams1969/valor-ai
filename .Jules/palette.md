## 2024-05-23 - Accessibility Improvements
**Learning:** Adding `aria-live="polite"` to dynamic log containers ensures screen reader users are aware of new updates without interrupting their current task. Also, ensuring `Progress` components have labels via `aria-labelledby` provides necessary context.
**Action:** Always check dynamic content areas for ARIA live regions and ensure visual labels are programmatically associated with form/display elements.
