## 2024-05-20 - Accessible File Upload with Label Pattern
**Learning:** When transforming a static upload placeholder into a functional component in a static HTML project, using a `<label>` as the interactive container for a hidden `<input type="file">` provides a clean, accessible pattern. This allows the use of Tailwind's `focus-within:ring` for visible focus states while maintaining semantic structure.
**Action:** Use `<label role="button" tabindex="0">` wrapping a hidden input for custom file uploads. Always use `textContent` when displaying user-provided filenames to prevent XSS.
