## 2024-05-24 - Accessible File Upload Pattern
**Learning:** Custom file upload 'dropzones' in this project were purely visual and lacked semantic association with a hidden file input, making them inaccessible to screen readers and keyboard users.
**Action:** Use a label wrapper with `role="button"`, `tabindex="0"`, and keyboard listeners linked to a hidden `input[type="file"]`. Always provide a `role="status"` element for immediate visual and screen-reader feedback upon file selection.
