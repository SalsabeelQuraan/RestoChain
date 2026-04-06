## 2024-05-23 - Accessible File Uploads
**Learning:** For accessible custom file uploads, the best pattern is to use a hidden `<input type="file" tabindex="-1">` outside the `<label>`, with the `<label>` acting as the interactive, keyboard-focusable (`tabindex="0"`) container. This avoids invalid nested interaction and ensures screen readers correctly associate the label with the input while providing a single tab stop for keyboard users.
**Action:** Use the "label-as-container" pattern with an external hidden input for custom styled file uploads to maintain HTML semantics and accessibility.
