## 2025-05-14 - Functional File Upload Pattern
**Learning:** Transforming a static upload placeholder into a functional component requires more than just accessibility attributes. To ensure full functionality, the container (label) must be linked to a hidden input via `for`/`id`, and drag-and-drop events must be manually handled to update the input's `files` property and dispatch a `change` event.
**Action:** Use a hidden `<input type="file">` linked to a `<label>` container. Implement drag-and-drop JS that assigns `e.dataTransfer.files` to the input and dispatches `change` for UI reactivity.
