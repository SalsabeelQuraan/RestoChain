## 2024-05-15 - Multi-state Blockchain Submission Feedback
**Learning:** For blockchain-based actions, a single click-to-success transition is insufficient due to transaction latency. Implementing a multi-state button (Initial -> Loading/Signing -> Success) significantly improves perceived reliability. To ensure Tailwind classes used in JS (like `bg-emerald-500`) aren't purged, they should be present in a hidden element in the HTML.
**Action:** Always implement intermediate "loading/processing" states for async actions and include a hidden "class reservoir" for dynamic Tailwind utilities.
