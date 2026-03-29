## 2024-05-15 - [Accessible Form Fields]
**Learning:** Explicitly linking labels to form fields using `for` and `id` attributes is crucial for accessibility (improving screen reader support and click targets). However, when performing automated verification in environments without a standard testing suite, ensure all temporary artifacts (like Playwright scripts and screenshots) are removed before submission to maintain repository cleanliness and avoid binary bloat.
**Action:** Always clean up the `verification/` directory and any other temporary files before calling `submit`.
