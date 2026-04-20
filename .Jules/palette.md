## 2024-05-15 - Accessible File Upload Transformation
**Learning:** Static "drag and drop" areas can be transformed into accessible file uploads by using a `<label>` as the container for a hidden `<input type="file">`. To maintain HTML validity, block-level elements (`div`, `p`) inside the label must be replaced with `<span>` tags using Tailwind's `block` or `flex` utilities.
**Action:** Use the label-wrap pattern with `tabindex="0"`, `role="button"`, and keyboard listeners (`Enter`/`Space`) to ensure full accessibility for custom upload UI.

## 2024-05-15 - Secure UI Feedback
**Learning:** When displaying user-provided data like selected filenames in the UI, using `textContent` instead of `innerHTML` is a simple and effective way to prevent DOM XSS.
**Action:** Always prefer `textContent` or `document.createElement` when rendering dynamic user content in micro-UX updates.
