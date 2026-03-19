## 2024-03-19 - Accessible File Upload Pattern
**Learning:** Custom interactive containers like file upload areas require careful handling of ARIA roles, tabindex, and keyboard listeners to be truly accessible.
**Action:** Use a `<label>` as the visual container (with `role='button'`, `tabindex='0'`, and keyboard listeners) linked to a hidden `<input type='file'>` via a shared `id`/`for` attribute.

## 2024-03-19 - Dynamic UI Feedback without standard frameworks
**Learning:** In static HTML projects, immediate visual feedback for micro-interactions (like file selection) can be achieved by updating text content and Tailwind classes via vanilla JS, but these classes must be present in the static source or handled carefully to be picked up by the Tailwind CDN.
**Action:** Prefer `element.textContent` for status updates and toggle existing Tailwind classes to avoid style flickering or missing styles.
