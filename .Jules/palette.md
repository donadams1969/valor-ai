## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-20 - Live Log Accessibility
**Learning:** Terminal-like interfaces with live updates need `role="log"` and `aria-live="polite"` to be announced by screen readers, plus `tabIndex={0}` if they are scrollable.
**Action:** Apply these attributes to any real-time status or log feeds.
