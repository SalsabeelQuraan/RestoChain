## 2024-05-24 - Accessible File Upload Pattern
**Learning:** Custom file upload UI must be more than just a `div` with a listener. Using a `label` linked to a hidden `input` provides native file selection, while `role="button"` and `tabindex="0"` with keyboard listeners ensure full accessibility. Visual feedback (filenames) and focus states (`focus-within`) are critical for a "delightful" UX.
**Action:** Use the `label` + `input` pattern for file uploads and always provide a visual state change (e.g. `textContent` update) upon selection.
