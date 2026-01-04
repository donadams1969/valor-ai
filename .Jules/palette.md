## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-27 - Live Logs Accessibility
**Learning:** Live-updating text areas (like logs or terminals) are inaccessible to screen readers without `role="log"` and `aria-live="polite"`. Adding `tabIndex={0}` allows keyboard users to scroll the area if it overflows.
**Action:** Apply these attributes to any scrolling log container.

## 2025-05-27 - Decorative Canvas Accessibility
**Learning:** Canvas elements used for background animations can trap screen reader focus or be announced unnecessarily.
**Action:** Always add `aria-hidden="true"` to purely decorative canvas elements.
