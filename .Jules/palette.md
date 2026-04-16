## 2025-05-22 - HTML Validity and UX Polish
**Learning:** Using block-level elements (like `div`, `p`, `h2`) inside a `<label>` is technically invalid HTML according to the spec, which only allows phrasing content. Additionally, a dark mode toggle should provide immediate visual feedback by swapping its icon (e.g., moon to sun).
**Action:** Use `<span>` with `block` or `flex` classes instead of block-level elements inside labels. Update dark mode toggles to swap icon text and include descriptive `aria-label` attributes.
