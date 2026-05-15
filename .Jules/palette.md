## 2025-05-14 - [Functional & Accessible File Upload]
**Learning:** Transforming a static placeholder into a functional component requires careful attention to event bubbling and accessibility. Using `pointer-events-none` on child elements of a custom interactive container ensures clicks and drag events are reliably handled by the parent.
**Action:** Always implement keyboard handlers (`Enter`/`Space`) and ARIA roles for custom interactive elements, and use `pointer-events-none` for nested decorative elements.
