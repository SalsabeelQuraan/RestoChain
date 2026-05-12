## 2025-05-14 - [Functional and Accessible Custom File Uploads]
**Learning:** Custom drag-and-drop upload zones require explicit event handling to sync with hidden file inputs and ensure keyboard accessibility (tabindex, ARIA roles, and Enter/Space handlers).
**Action:** Position hidden <input type="file"> as a sibling to avoid click recursion, and manually assign DataTransfer.files to the input during the drop event to ensure form submission works as expected.
