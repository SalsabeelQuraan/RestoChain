## 2024-05-23 - Functional Accessible File Uploads
**Learning:** In static HTML projects, an interactive file upload can be built using a `<label>` with `role="button"` and `tabindex="0"` wrapping a hidden `<input type="file">`. This maintains accessibility, allows for custom styling (like drag-and-drop states), and ensures keyboard support when explicit keydown listeners for 'Enter' and 'Space' are added.
**Action:** Use this pattern (label-container + hidden-input) for custom file uploads to ensure screen reader and keyboard compatibility.

## 2024-05-23 - Tailwind CDN and Dynamic Classes
**Learning:** When using the Tailwind CSS CDN, classes added dynamically via JavaScript (e.g., `animate-spin` or success colors) won't be rendered unless they exist in the static HTML at load time.
**Action:** Include a hidden `<div>` with all potential dynamic classes to ensure they are processed by the CDN.
