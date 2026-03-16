## 2025-05-14 - Accessible Interactive File Upload
**Learning:** For custom-styled file upload areas, using a `<label>` as the container with a hidden `<input type="file">` provides the best balance of styling flexibility and native accessibility, provided that `role="button"`, `tabindex="0"`, and keyboard listeners for 'Enter'/'Space' are also added.
**Action:** Always implement this pattern for custom dropzones to ensure they are keyboard-navigable and screen-reader friendly while allowing full Tailwind CSS customization.
