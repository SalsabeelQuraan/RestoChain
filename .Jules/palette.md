## 2025-05-15 - Functional Upload Zone Security
**Learning:** When transforming static placeholders into functional file upload components, displaying user-controlled filenames using `innerHTML` creates a "self-XSS" risk. Malicious filenames could execute scripts if rendered directly.
**Action:** Always use `textContent` or `document.createElement` when rendering user-provided data like filenames. Additionally, explicitly remove initial "placeholder" Tailwind classes (e.g., `border-slate-200`) when applying "success" states (e.g., `border-emerald-500`) to ensure consistent styling.
