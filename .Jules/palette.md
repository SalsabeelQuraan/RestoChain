## 2024-04-13 - Accessible Custom File Uploads
**Learning:** When creating custom file upload areas where a label wraps or is associated with a hidden input, the `for` attribute (or nesting) is critical for mouse-click propagation. Additionally, adding `tabindex="0"` and `role="button"` on the label, along with keyboard event listeners, ensures accessibility for keyboard users.
**Action:** Always verify both mouse and keyboard interactions for custom form components and ensure proper label-input association.
