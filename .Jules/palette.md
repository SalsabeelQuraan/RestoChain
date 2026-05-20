## 2025-05-14 - [Accessible and Interactive File Uploads]
**Learning:** Custom-styled file upload zones often lack keyboard accessibility and visual feedback. By using a hidden input triggered by a focusable 'button' div, we can maintain design flexibility while meeting accessibility standards.
**Action:** Always include `tabindex="0"`, `role="button"`, and `keydown` handlers for Space/Enter when creating custom interactive containers, and provide immediate visual feedback for user actions.
