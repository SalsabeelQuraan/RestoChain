## 2024-05-24 - Accessible File Upload Pattern
**Learning:** Custom file upload areas implemented with divs lack keyboard accessibility and screen reader support. Using a label as the interactive container linked to a hidden input provides a native, accessible foundation.
**Action:** Always use a `<label>` with `role="button"`, `tabindex="0"`, and keyboard listeners (Enter/Space) when creating custom file upload zones.

## 2024-05-24 - Dynamic UI Feedback for File Selection
**Learning:** Users need immediate confirmation after selecting files, especially in a drag-and-drop context. Static icons aren't enough.
**Action:** Implement a `role="status"` element to provide textual feedback of selected filenames and use visual state changes (like border/background color) during drag events.
