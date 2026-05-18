## 2024-05-18 - [Functional Upload Zones]
**Learning:** For custom drag-and-drop or clickable upload containers, applying `pointer-events-none` to child elements ensures that all interactions (clicks, drags) consistently target the intended parent container, preventing event bubbling issues and simplifying state management.
**Action:** Use `pointer-events-none` on children of interactive custom components to normalize event targeting.
