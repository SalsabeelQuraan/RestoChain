## 2025-05-14 - Accessible File Upload Pattern
**Learning:** In static HTML projects, an accessible and interactive file upload can be built using a `<label>` as a container (with `role="button"`, `tabindex="0"`, and `for` matching a hidden `<input type="file" tabindex="-1">`). This allows for custom styling while maintaining keyboard accessibility and screen reader support.
**Action:** Use this pattern to replace static "upload" areas. Include a `role="status"` element to provide feedback on selected files.

## 2025-05-14 - Simulated Async Feedback
**Learning:** For actions that simulate blockchain or server interaction, providing a "Processing..." state (disabling the button and adding a spinner) followed by a "Success" state significantly improves perceived UX and prevents duplicate submissions.
**Action:** Always implement visual feedback states for primary call-to-action buttons in decentralized app interfaces.
