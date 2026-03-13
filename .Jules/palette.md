## 2024-03-13 - Enhanced Submission UX
**Learning:** For a more accessible and functional file upload, using a <label> linked to a hidden <input> with ARIA roles and keyboard listeners is much more robust than a generic <div>. Additionally, providing simulated async feedback (Processing -> Success) greatly improves the user's perception of system status in blockchain applications.
**Action:** Always prefer <label> + <input type='file'> for uploads and include visual feedback for file selection and action submission.
