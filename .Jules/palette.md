## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-15 - Live Log Accessibility
**Learning:** Live-updating log regions (like terminals) require `role="log"`, `aria-live="polite"`, and `tabIndex={0}` to be accessible, and should avoid `dangerouslySetInnerHTML` when content is plain text.
**Action:** Ensure all future terminal/log components follow this accessible pattern.
