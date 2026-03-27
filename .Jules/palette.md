## 2026-03-27 - Accessible and interactive file upload pattern
**Learning:** For custom file upload containers in static HTML, using a `<label>` as the visual container linked to a hidden `<input type="file">` via `id`/`for` provides better accessibility. Enhancing it with `role="button"`, `tabindex="0"`, and keyboard listeners ensures keyboard users can interact with it naturally.
**Action:** Always implement dynamic feedback (e.g., displaying filenames) and clear focus indicators (e.g., `focus-within:ring`) when creating custom UI controls that replace native ones.
