## 2025-05-14 - Functional Feedback for Custom Upload Zones
**Learning:** In static HTML projects, custom file upload zones often lack visual feedback, leaving users unsure if their action succeeded. Adding a dynamic file list with `aria-live="polite"` provides essential feedback for both visual and screen-reader users.
**Action:** Always implement a dedicated feedback container (e.g., `#file-list`) when using custom interactive elements for file selection, ensuring it is updated via secure DOM methods (`textContent`) to prevent self-XSS.
