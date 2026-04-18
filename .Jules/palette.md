## 2024-05-15 - Accessible File Upload Pattern
**Learning:** Static "upload" placeholders can be transformed into accessible, interactive components by using a hidden `<input type="file">` linked to a keyboard-focusable `<label>` (tabindex="0", role="button") with appropriate focus-within styles and keydown listeners for Enter/Space.
**Action:** Use this pattern whenever a design includes a custom-styled upload area to ensure both functionality and accessibility for keyboard and screen reader users.
