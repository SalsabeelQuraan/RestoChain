## 2024-05-22 - Accessible Custom File Upload
**Learning:** Static dropzone-style placeholders are common UX debt. Transforming them into functional, keyboard-accessible components using a linked `<label>` and hidden `<input>` improves both usability and accessibility. Replacing block-level elements (div, p) with `<span>` within the label is necessary for HTML5 validity.
**Action:** Always use the `<label>` (interactive) + hidden `<input>` pattern for custom uploads. Ensure `tabindex="0"` and `role="button"` on the label, and `tabindex="-1"` on the input to avoid redundant tab stops.
