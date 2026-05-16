# Palette's Journal - Critical Learnings

## 2025-05-14 - Interactive File Uploads
**Learning:** To ensure files are actually attached to a form submission when using a custom drag-and-drop target, manually assign the `DataTransfer.files` object to the `HTMLInputElement.files` property during the 'drop' event.
**Action:** Always link a hidden input to the custom zone and sync files on drop.

## 2025-05-14 - Accessibility for Custom Controls
**Learning:** For custom interactive elements, always implement `keydown` handlers for Enter and Space keys and provide `role="button"` and `tabindex="0"`.
**Action:** Implement these patterns for the upload zone.

## 2025-05-14 - Visual Feedback for Drag-and-Drop
**Learning:** Users need clear visual feedback when dragging files over a drop zone.
**Action:** Toggle Tailwind background and border classes (e.g., `border-primary/50`, `bg-primary/5`) during `dragover` and `dragleave`.
