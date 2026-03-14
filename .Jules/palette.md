## 2024-03-14 - Accessible Custom File Uploads
**Learning:** Decorative file upload areas (drag-and-drop zones) are often inaccessible to keyboard users and lack feedback. In this repo, they were just divs with a `cursor-pointer`.
**Action:** Use an invisible `<input type="file">` linked to a `<label>` (with `role="button"` and `tabindex="0"`) to make it accessible. Always add a JavaScript listener to provide immediate visual feedback (like "N file(s) selected") so users know their action worked.
