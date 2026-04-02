## 2026-04-02 - Accessible File Upload with Feedback
**Learning:** In static HTML projects without a backend, a custom file upload can be made accessible by using a `<label>` as the visual container linked to a hidden `<input type='file'>`. Adding `role='button'`, `tabindex='0'`, and keyboard listeners for 'Enter' and 'Space' ensures it's usable by keyboard users, while a status element with `role='status'` provides necessary feedback.
**Action:** Always provide visual and screen-reader feedback when a file is selected in a custom upload UI.
