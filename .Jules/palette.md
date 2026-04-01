## 2026-04-01 - Accessible File Upload Pattern
**Learning:** Custom file upload areas often use a `div` that is visually appealing but inaccessible and non-functional. Using a `<label>` wrapping a hidden `<input type="file">` provides a semantic, accessible container that can be easily styled and enhanced with keyboard listeners.
**Action:** Use the label-wrap pattern for custom file uploads, ensuring `tabindex="0"`, `role="button"`, and explicit `keydown` listeners for 'Enter' and 'Space' are included.
