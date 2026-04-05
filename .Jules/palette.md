## 2025-05-14 - Accessible Custom File Upload
**Learning:** For custom file upload containers (e.g., drag-and-drop zones), using a `<label>` with `tabindex="0"` and `role="button"` linked to a hidden `<input type="file" tabindex="-1">` provides the best accessibility. It allows keyboard navigation via `Enter` or `Space` while avoiding redundant tab stops.
**Action:** Apply this pattern for any custom upload UI to ensure screen reader and keyboard compatibility.
