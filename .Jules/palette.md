## 2025-05-14 - Blockchain Submission Feedback Pattern
**Learning:** Users in decentralized apps expect immediate confirmation of the "signing" process and clear visibility of blockchain-specific success markers (TxHash, Block Number) to trust the transaction was recorded.
**Action:** Implement a multi-stage submission feedback loop: 1. Immediate button disablement with 'Submitting...' text and spinning icon. 2. A simulated delay to match blockchain finality. 3. Final success state with accessible `role="status"` and specific transaction metadata.
