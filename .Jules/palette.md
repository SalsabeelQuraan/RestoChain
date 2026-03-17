## 2024-05-24 - Accessible File Upload with Feedback
**Learning:** In a static HTML environment with Tailwind CSS, custom interactive components (like a drag-and-drop zone) can be made accessible by using a `<label>` linked to a hidden `<input type="file">`, supplemented with `role="button"`, `tabindex="0"`, and explicit keydown listeners for keyboard users.
**Action:** Use this pattern for all custom file upload areas: link to a hidden input via `for`/`id`, add `tabindex="0"`, and use `textContent` to provide non-XSS feedback on file selection.
