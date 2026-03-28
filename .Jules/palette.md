## 2024-05-15 - Accessible Custom File Upload
**Learning:** Custom file upload areas implemented as simple `div` placeholders lack keyboard accessibility and screen reader support. Using a `<label>` wrapping a hidden `<input type="file">` with `role="button"` and `tabindex="0"` allows for native-like interaction while maintaining custom styling.
**Action:** Always wrap custom upload UI in a `<label>` associated with a hidden file input, and implement `Enter`/`Space` key listeners to trigger the upload dialog manually for keyboard users.
