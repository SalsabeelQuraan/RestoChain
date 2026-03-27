
## 2025-05-14 - Accessible Custom File Upload
**Learning:** In static HTML projects, an accessible file upload pattern involves using a `<label>` as the interactive container (with `role="button"`, `tabindex="0"`, and keyboard listeners) linked to a hidden `<input type="file">` via a shared `id`/`for` attribute.
**Action:** Use `role="status"` on dynamic feedback elements to ensure selection state is announced by screen readers.
