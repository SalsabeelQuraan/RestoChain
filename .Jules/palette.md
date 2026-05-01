## 2025-05-14 - Accessible Custom File Upload
**Learning:** Transforming a static placeholder into a functional file upload requires making the container focusable and keyboard-accessible, while using 'pointer-events-none' on children to ensure consistent drag-and-drop and click behavior.
**Action:** Always add 'role="button"', 'tabindex="0"', and appropriate ARIA labels to custom interactive containers, and link them to hidden inputs for native functionality.
