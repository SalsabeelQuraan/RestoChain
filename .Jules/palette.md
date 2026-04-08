## 2025-04-08 - Accessible File Upload with Feedback
**Learning:** Dead UI elements that look interactive (like custom drag-and-drop areas) are a major source of user frustration. Implementing them with proper accessibility (label, hidden input, keyboard support) and visual feedback (filename display, dragover states) significantly improves the perceived quality of the interface.
**Action:** Always check if styled "upload" areas are functional and accessible. Use the label-wrapped-input or linked-label-input pattern with `tabindex` and `role="button"`.
