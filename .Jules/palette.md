## 2024-05-24 - Accessible File Upload Pattern
**Learning:** In static HTML projects, a common UX gap is the "dead" file upload area. Converting a static `div` to a `<label role="button" tabindex="0">` wrapping a hidden `<input type="file" tabindex="-1">` provides a clean, accessible, and functional pattern without needing external libraries.
**Action:** Use this pattern whenever a file upload area is presented as a styled box. Ensure `focus-within:ring-2` is on the label to provide focus feedback for both mouse and keyboard users.
