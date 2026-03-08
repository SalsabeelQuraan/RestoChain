## 2024-05-23 - Inconsistent Dark Mode Toggles
**Learning:** In multi-page static HTML projects, UI components like dark mode toggles can easily become inconsistent or broken if not maintained centrally. 'submit.html' had a non-functional toggle, while other pages lacked accessibility labels.
**Action:** Always check all pages for functional consistency of shared UI elements. Use a two-icon pattern (moon/sun) with 'dark:hidden' and 'hidden dark:block' classes for clear visual state feedback.
