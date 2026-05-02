## 2024-05-15 - Interactive File Upload & Submission Feedback
**Learning:** Applying 'pointer-events-none' to children of a custom drag-and-drop container prevents event flickering during drag actions, ensuring a stable visual state. Using 'replaceChildren()' combined with 'textContent' when rendering dynamic lists is a clean, safe pattern that avoids both DOM accumulation and XSS vulnerabilities.
**Action:** Use 'pointer-events-none' on children of complex drop zones and prefer 'replaceChildren()' for safe, efficient UI refreshes.
