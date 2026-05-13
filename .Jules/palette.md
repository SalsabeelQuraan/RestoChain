## 2024-05-20 - [Interactive File Upload]
**Learning:** To ensure files are actually attached to a form submission when using a custom drag-and-drop target, manually assign the DataTransfer.files object to the HTMLInputElement.files property during the 'drop' event.
**Action:** Always link the visual drop event to the underlying hidden file input's files property to maintain form submission compatibility.
