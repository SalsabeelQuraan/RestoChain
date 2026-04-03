## 2025-05-15 - Enhancing Async Button Feedback
**Learning:** Using Tailwind's `disabled:opacity-50` utility on a button while also changing its background color (e.g., to `bg-green-500` for success) can lead to a washed-out, muddy appearance because the opacity reduction applies to the new color as well.
**Action:** When a button reaches a terminal state (like Success or Error) that uses a specific status color, remember to programmatically remove the `disabled:opacity-50` class (or similar opacity-reducing classes) to ensure the status color is vibrant and clearly visible, even if the button remains functionally disabled.

## 2025-05-15 - Accessible Custom File Uploads
**Learning:** Custom file upload areas (like drag-and-drop zones) are often implemented as non-interactive `div`s, making them invisible to keyboard and screen reader users.
**Action:** Implement custom upload zones using a `<label>` linked to a hidden `<input type="file">`. Enhance accessibility by adding `role="button"`, `tabindex="0"`, and `keydown` listeners (for Enter/Space) to the label, while setting `tabindex="-1"` on the hidden input to avoid redundant tab stops. Use `focus-within:ring-2` to provide visual focus feedback.
