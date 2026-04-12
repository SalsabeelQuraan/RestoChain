# Palette's Journal - Critical Learnings Only

## 2024-05-15 - Enhancing File Upload Accessibility and Functionality
**Learning:** Static "dropzone" divs often found in templates lack both basic functionality (input) and accessibility (keyboard navigation, screen reader feedback).
**Action:** Always replace static upload placeholders with a functional pattern: a hidden `<input type="file">` linked to an interactive `<label>` with `tabindex="0"`, `role="button"`, and an ARIA status element for feedback.
