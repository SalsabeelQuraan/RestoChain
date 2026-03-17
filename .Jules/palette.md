## 2024-05-23 - Accessible and Functional File Upload Pattern
**Learning:** Custom file upload areas implemented as decorative divs are inaccessible and non-functional. Converting them to a `<label>` linked to a hidden `<input type="file">` provides native functionality while maintaining custom styling.
**Action:** Use the pattern: `<input type="file" id="id" class="hidden"><label for="id" role="button" tabindex="0" aria-label="...">...</label>` with a `keydown` listener and a child element having `role="status"` for dynamic feedback.
