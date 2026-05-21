## 2025-05-14 - Accessible Custom File Uploads
**Learning:** Custom file upload "drop zones" often fail basic accessibility and keyboard navigation. Using role="button", tabindex="0", and a hidden input triggered by an IIFE ensures functionality while maintaining design.
**Action:** Always link custom upload containers to hidden inputs and implement Enter/Space key listeners.
