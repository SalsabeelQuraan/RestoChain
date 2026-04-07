## 2024-05-15 - Preventing Drag-and-Drop Flicker
**Learning:** Interactive containers with child elements can trigger frequent `dragleave` and `dragenter` events as the cursor moves over those children, causing visual flicker of highlight states.
**Action:** Apply `pointer-events-none` to direct children of the drag-and-drop container to ensure pointer events are captured only by the parent element, providing a smoother visual experience.
