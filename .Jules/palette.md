# Palette's Journal

## 2024-05-23 - Functional File Upload
**Learning:** Static "drag and drop" zones often lack basic accessibility (focus, labels) and functionality. Converting them into accessible interactive components with visual feedback during drag operations significantly improves UX.
**Action:** Always provide `role="button"`, `tabindex="0"`, and visual feedback (like border color changes) for custom upload zones. Ensure filenames are rendered safely with `textContent` to prevent XSS.
