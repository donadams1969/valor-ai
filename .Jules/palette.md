# Palette's Journal

## 2025-05-18 - Live Region Improvements
**Learning:** React state updates in terminal-style logs are not automatically announced by screen readers, creating a silent experience for visually impaired users during critical "verification" steps.
**Action:** Always wrap live-updating log containers with `role="log"` and `aria-live="polite"` to ensure status updates are announced without interrupting the user.
