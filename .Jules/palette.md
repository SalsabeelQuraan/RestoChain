## 2024-05-15 - Accessible and Functional File Uploads
**Learning:** Static "drag and drop" placeholders can be transformed into accessible components by using a `<label>` as the container for a hidden `<input type="file">`. Using `pointer-events-none` on children of the label prevents drag-and-drop flickering without complex JS counters.
**Action:** Use the `label` + `input[type="file"].sr-only` pattern with `tabindex="0"` on the label for keyboard focus, and `pointer-events-none` on decorative children to ensure stable drag-and-drop states.
