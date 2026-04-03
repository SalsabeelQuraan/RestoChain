## 2025-05-14 - Accessible File Upload Pattern
**Learning:** For custom file upload areas (like drag-and-drop zones), using a `<label>` as the main container linked to a hidden `<input type="file">` via `id`/`for` is the most accessible and robust pattern. It allows the browser's native file selection to be triggered while providing a custom UI.
**Action:** Always implement `role="button"`, `tabindex="0"`, and `aria-label` on the label, along with keyboard listeners for 'Enter' and 'Space' to ensure full keyboard accessibility. Use `focus-within` on the label for visible focus states.
