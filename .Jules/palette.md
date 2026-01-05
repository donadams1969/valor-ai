## 2025-05-02 - Progress Component Accessibility
**Learning:** Radix UI Progress components lack inherent labeling and must have explicit `aria-label` or `aria-labelledby` props to be accessible to screen readers, especially when visual labels are siblings.
**Action:** Always verify `Progress` usage includes accessible labels.

## 2025-05-20 - Decorative Icons and Screen Readers
**Learning:** Decorative icons from `lucide-react` (often used in headers or buttons with existing text) are not automatically hidden from screen readers, causing redundant or confusing announcements.
**Action:** Explicitly add `aria-hidden="true"` to any `lucide-react` icon that is purely decorative or redundant to adjacent text.
