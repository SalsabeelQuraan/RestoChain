## 2025-05-14 - Functional File Upload & Blockchain Feedback
**Learning:** For custom drag-and-drop zones, manually assigning the `DataTransfer.files` to the hidden `HTMLInputElement.files` is essential for form compatibility. Using `pointer-events-none` on child elements of the drop zone prevents event flickering during drag-over.
**Action:** Always link custom interactive zones to a hidden native input and manage file state synchronization explicitly.

**Learning:** Blockchain interactions feel safer and more reliable when providing a transitional "Submitting..." state followed by immutable proof like a Transaction Hash and Block Number.
**Action:** Implement a two-stage submission feedback loop for blockchain-related actions.
