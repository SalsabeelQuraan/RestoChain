## 2025-05-17 - Transforming static placeholders into functional components
**Learning:** Static "upload" placeholders can be transformed into accessible, interactive components by adding appropriate roles, keyboard support, and drag-and-drop feedback. Using pointer-events-none on child elements ensures the entire container remains the interactive target.
**Action:** Always identify static UI elements that imply interaction (like upload zones) and enhance them with ARIA roles, tabindex, and visual feedback for drag-and-drop states.
