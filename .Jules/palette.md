## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2026-01-02 - Decorative Icons and Live Regions
**Learning:**
1.  **Decorative Icons:** Header icons from `lucide-react` are read by screen readers unless `aria-hidden="true"` is explicitly added.
2.  **Live Regions:** Dynamic content areas like logs need `role="log"` and `aria-live="polite"` to be announced.
3.  **Keyboard Access:** Scrollable containers for logs need `tabIndex={0}` to be focusable and scrollable via keyboard.
**Action:** Audit all dynamic content areas for `aria-live` and all decorative icons for `aria-hidden`.
