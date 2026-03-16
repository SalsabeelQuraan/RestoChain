## 2024-05-24 - Accessible File Upload with Feedback
**Learning:** In static HTML projects, accessible file uploads can be achieved by using a styled `<label>` with `role="button"` and `tabindex="0"`, linked to a hidden `<input type="file">`. Micro-feedback (like showing selected filenames) and keyboard listeners for 'Enter'/'Space' significantly enhance the UX.
**Action:** Use the label-wrapped-input pattern for custom file uploaders, always including an `aria-live` status element for screen reader support and visual confirmation.
