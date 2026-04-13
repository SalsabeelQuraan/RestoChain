# Palette Journal - Critical UX/Accessibility Learnings

## 2024-11-20 - Accessible Custom File Uploads
**Learning:** In a static HTML environment, transforming a decorative upload placeholder into a functional component requires more than just adding an `<input type="file">`. To ensure accessibility, the interactive container should be a `<label>` with `tabindex="0"` and `role="button"`, linked to a hidden input with `tabindex="-1"`. This prevents redundant tab stops while maintaining keyboard and screen reader support. Additionally, custom JavaScript must handle 'Enter' and 'Space' keys to trigger the hidden input.
**Action:** Always use the label-container pattern for custom file uploads and provide a dedicated `role="status"` element for non-visual confirmation of file selection.
