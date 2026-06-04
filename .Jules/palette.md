## 2025-05-14 - Accessible File Upload Pattern
**Learning:** When building custom file upload components in static HTML, ensuring accessibility requires explicit role/tabindex and an `aria-live` region for the file list to inform screen readers of successful selection. Using `textContent` for filenames prevents self-XSS from malicious user-controlled data.
**Action:** Always use `role="button"` + `tabindex="0"` for custom upload zones, and prefer `textContent` over `innerHTML` when rendering filenames.
