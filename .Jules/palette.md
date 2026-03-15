## 2025-05-14 - Accessible Custom File Uploads
**Learning:** Decorative file upload areas implemented as <div> or <label> containers require explicit accessibility attributes (role="button", tabindex="0") and keyboard event listeners for Enter/Space to be usable by non-mouse users.
**Action:** Always refactor custom upload containers into <label> elements linked to hidden <input type="file"> and ensure keyboard parity with click interactions.
