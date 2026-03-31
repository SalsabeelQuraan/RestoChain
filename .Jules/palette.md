## 2024-05-23 - Accessible File Upload Pattern
**Learning:** For static HTML projects using Tailwind, an accessible file upload can be implemented using a styled `<label>` with `role="button"` and `tabindex="0"` wrapping a hidden `<input type="file" class="sr-only">`. This requires explicit `keydown` listeners for 'Enter' and 'Space' to trigger the input's `.click()` method for keyboard users.
**Action:** Use this pattern whenever a custom-styled file upload zone is needed, ensuring a `<p role="status">` element provides immediate feedback on selected files.
