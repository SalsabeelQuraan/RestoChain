## 2024-05-24 - Micro-UX Scope and Constraints
**Learning:** Implementing elaborate functional simulations (e.g., full blockchain transaction flows) in a micro-UX context can easily exceed the 50-line constraint and overreach into application logic, leading to rejection.
**Action:** Prioritize foundational accessibility (label linking) and immediate, non-destructive interaction feedback (file selection status) that enhances existing elements without overwriting large DOM sections.

## 2024-05-24 - Accessible File Uploads
**Learning:** Standardizing custom file upload areas requires a specific pattern: a hidden input (`tabindex="-1"`) and a focusable label (`tabindex="0"`, `role="button"`) linked via `for`/`id`. Focus feedback should be handled via `focus-within` on the container.
**Action:** Use this pattern for all custom file upload implementations to ensure screen reader and keyboard compatibility.
