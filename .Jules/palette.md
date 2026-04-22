## 2024-05-23 - Accessible Custom File Uploads
**Learning:** Transforming a static upload placeholder into a functional, keyboard-accessible component requires using a `<label>` as the focusable container (`tabindex="0"`) linked to a hidden `<input type="file">`. To ensure full accessibility, keyboard listeners for 'Enter' and 'Space' must be added to the label to programmatically trigger the input.
**Action:** Use the label-wrapped-input pattern with manual keyboard event delegation and `aria-label` or `role="button"` for custom file upload UIs.
