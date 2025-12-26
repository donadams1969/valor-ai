## 2024-05-23 - Decorative Icons and Screen Reader Noise
**Learning:** `lucide-react` icons (SVGs) used for decorative purposes or alongside descriptive text are not automatically hidden from screen readers. This can cause redundant or confusing announcements (e.g., "Cpu image Cognitive Load").
**Action:** Always add `aria-hidden="true"` to icon components when they are purely decorative or when their meaning is fully conveyed by adjacent text. Check header icons and metric indicators specifically.
