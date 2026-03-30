## 2024-05-15 - Accessible File Upload Pattern
**Learning:** Standardizing file upload components by wrapping a hidden input in an interactive `<label>` with ARIA roles and keyboard listeners significantly improves both accessibility and visual feedback. Using `role="status"` on a dedicated feedback element ensures screen readers announce dynamic changes like filename selection.
**Action:** Use the pattern of `<label role="button" tabindex="0">` + `focus-within:ring` + hidden `<input type="file">` + `<p role="status">` for any custom file upload interactions.
