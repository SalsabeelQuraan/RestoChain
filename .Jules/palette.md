## 2024-10-27 - Tailwind CDN Dynamic Class Loading
**Learning:** When using the Tailwind CSS CDN, classes added dynamically via JavaScript (like `animate-spin` or `bg-green-500`) will not be rendered unless they are already present in the static HTML source code.
**Action:** Include a hidden helper div in the HTML containing any classes that will be applied dynamically via JavaScript to ensure the CDN processes them.

## 2024-10-27 - Blockchain UX Transparency
**Learning:** In a blockchain/Web3 context, it is critical to keep informative messages (like gas fee warnings) visible before submission rather than hiding them for a "cleaner" UI.
**Action:** Ensure that status messages providing transparency for cost or process are visible by default before the user clicks the primary action button.
