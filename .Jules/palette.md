## 2025-05-14 - Accessible Custom File Upload Pattern
**Learning:** Static "upload" divs are common UX dead-ends. Transforming them into accessible components requires linking a hidden input to a keyboard-focusable label container with proper ARIA roles and event listeners.
**Action:** Use a focusable `<label>` (`tabindex="0"`, `role="button"`) linked to a hidden `<input type="file" tabindex="-1">`. Implement 'keydown' (Enter/Space) and 'drag/drop' listeners with visual state feedback. Always use `textContent` for displaying user-provided filenames to prevent DOM XSS.
