## 2025-05-14 - Transient Interaction Feedback vs. Persistent State
**Learning:** Interaction-specific visual feedback (like a background highlight during drag-over) should be cleared on interaction completion ('dragleave' or 'drop') regardless of the component's underlying state (e.g., whether files are already selected).
**Action:** Decouple transient interaction utility classes from persistent state classes in event handlers to ensure visual consistency.
