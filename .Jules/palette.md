## 2024-05-24 - Interactive Blockchain Submission Flow
**Learning:** Users in decentralized apps expect immediate, transparent feedback when interacting with smart contracts. A static "Submit" button creates uncertainty during the "signing" and "mining" phases.
**Action:** Always implement a three-state submission flow (Idle -> Submitting/Signing -> Success/Confirmed) with mock or real transaction details (Block #, TxHash) to build trust and provide clear UX. Use `aria-live="polite"` for the success status.
