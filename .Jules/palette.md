## 2024-05-24 - Accessibility on Radix UI Progress Component
**Learning:** Radix UI `Progress` component lacks inherent labeling and does not expose `aria-label` prop in its default export unless manually forwarded or added to the primitive root. However, Next.js / shadcn implementation usually forwards props.
**Action:** Always verify `aria-label` or `aria-labelledby` is present when using `Progress` components to ensure screen readers announce the purpose of the progress bar.
