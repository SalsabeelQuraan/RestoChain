## 2024-05-15 - Interactive Upload Feedback
**Learning:** For custom-styled file upload areas, providing immediate inline feedback on the number of selected files significantly improves the perceived responsiveness of the form, especially in a Web3/blockchain context where the next step (signing) is a high-friction action.
**Action:** Always pair custom upload containers with an `onchange` listener on the hidden input to update a feedback element, and ensure keyboard parity using `tabindex="0"` and a `keydown` listener for 'Enter'/'Space'.
