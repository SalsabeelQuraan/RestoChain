## 2024-05-24 - [Keyboard Accessibility for Focusable Elements]
**Learning:** Adding `tabindex="0"` to a non-interactive element (like a `<label>` wrapping a hidden `<input>`) makes it focusable but does NOT automatically add keyboard support for standard activation keys ('Enter', 'Space'). Screen reader users and keyboard navigators expect these keys to work.
**Action:** Always add a `keydown` event listener that listens for 'Enter' and 'Space' when making a custom UI component focusable via `tabindex`.

## 2024-05-24 - [Dynamic Tailwind Classes in Static HTML]
**Learning:** When using the CDN version of Tailwind CSS, adding classes dynamically via JavaScript (e.g., `classList.add('bg-green-500')`) might not work if that class isn't already used in the static HTML, as Tailwind might not have generated the necessary CSS for it.
**Action:** Either include the class in a hidden element to ensure it's generated, or use inline styles for dynamic state changes when the environment is uncertain.
