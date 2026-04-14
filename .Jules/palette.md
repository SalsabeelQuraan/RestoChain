## 2026-04-14 - Accessible Custom File Upload
**Learning:** For custom file upload components where a label acts as the container, use `tabindex="0"` and `role="button"` on the label for keyboard focus, and `tabindex="-1"` with `.sr-only` on the hidden input to prevent redundant tab stops.
**Action:** Always implement this pattern for custom uploads to ensure screen reader and keyboard accessibility while maintaining visual design freedom.
