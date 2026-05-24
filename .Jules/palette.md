## 2024-05-24 - [Accessible Custom Upload Zones]
**Learning:** Transforming a static placeholder into a functional upload zone requires careful handling of accessibility (role="button", tabindex, aria-label) and keyboard events (Enter/Space) to match native input behavior.
**Action:** Use an IIFE to encapsulate upload logic in static HTML files, and ensure both click and drag-and-drop events update the same hidden input state to maintain consistency.
