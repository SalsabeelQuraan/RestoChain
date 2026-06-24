# RestoChain: Decentralized Restaurant Rating & Food Safety Platform

## 📋 1. Executive Summary

RestoChain is a blockchain-based platform designed to transform food safety standards through transparent, tamper-proof restaurant ratings and hygiene reporting. By leveraging smart contracts, decentralized storage, and trusted oracle integrations, the system establishes an immutable public record of consumer reviews and official health inspection data — empowering diners to make informed decisions while incentivizing restaurants to uphold rigorous hygiene standards.

---

## Table of Contents

- [📋 1. Executive Summary](#1-executive-summary)
- [⚖️ 2. Core Principles](#2-core-principles)
- [🏗️ 3. Platform Architecture](#3-platform-architecture)
  - [👤 3.1. Front-End & User Authentication](#31-front-end--user-authentication)
  - [⛓️ 3.2. Smart Contract Layer](#32-smart-contract-layer)
  - [🚨 3.3. Food Poisoning Incident Reporting](#33-food-poisoning-incident-reporting)
  - [🔮 3.4. Oracle Integration & On-Chain Transparency](#34-oracle-integration--on-chain-transparency)
  - [📑 3.5. Blockchain Ledger & Transaction Flow](#35-blockchain-ledger--transaction-flow)
  - [🪙 3.6. Token Incentive Mechanism](#36-token-incentive-mechanism)
- [❓ 4. Why RestoChain?](#4-why-restochain)

---

## ⚖️ 2. Core Principles

| Principle | Description |
|-----------|-------------|
| **Decentralization** | Ratings and reports are distributed across the blockchain — no single entity can alter or remove them. |
| **Smart Contract Verification** | All review submissions are validated automatically through on-chain logic, eliminating the need for manual moderation. |
| **Trusted Data Integration** | Official health inspection results are fed into the system via Oracle nodes, enabling verified authority-backed data. |
| **Incentivized Participation** | Token rewards encourage honest, high-quality contributions from the user community. |

[↑ Back to Top](#table-of-contents)

---

## 🏗️ 3. Platform Architecture

### 👤 3.1. Front-End & User Authentication

**Gmail OAuth Sign-In**
Users authenticate securely using their existing Google accounts via OAuth 2.0. No separate credentials are required, reducing friction and improving accessibility.

**Privacy-Preserving Identity Linkage**
Each review is cryptographically linked to the user's Gmail identity without exposing the email address publicly. Instead, the system generates an encrypted internal identifier, ensuring accountability while preserving user privacy.

**Data Ownership**
Users retain full, sovereign ownership of their reviews and personal data. The platform operates without intermediaries and enforces content integrity through cryptographic proofs, effectively preventing fake or duplicate reviews.

---

### ⛓️ 3.2. Smart Contract Layer

**Immutable Review Submission**
Every review is digitally signed by the submitting user and recorded on-chain via a dedicated smart contract. Once committed, the entry cannot be modified or deleted, ensuring a permanent and trustworthy record.

**Restaurant-Specific Ledger**
Each review is stored in a new blockchain block associated with the restaurant's unique on-chain address, enabling a complete and auditable history per establishment.

**Reputation Score Aggregation**
The smart contract continuously computes each restaurant's reputation score based on the aggregate of verified reviews, reflecting real-time community sentiment.

---

### 🚨 3.3. Food Poisoning Incident Reporting

Users can submit formal incident reports through a structured form, providing the following information:

- **Incident Description** — A detailed account of the food poisoning event
- **Date & Time** — Exact timing of the incident
- **Order/Bill Reference** *(optional)* — For cross-referencing with restaurant records
- **Supporting Documentation** — Medical reports, official certificates, or photographic evidence

**Technical Pipeline:**

1. Supporting files (images, documents) are uploaded to **IPFS** (InterPlanetary File System) for decentralized, censorship-resistant storage.
2. The IPFS content hash is recorded on-chain via the smart contract, preserving privacy while ensuring data integrity.
3. The smart contract performs **duplicate detection**, ensuring each incident is logged only once.
4. When confirmed reports for a given restaurant surpass a defined threshold, the contract triggers an **automated alert mechanism** — notifying health authorities and flagging the restaurant on the public ledger.

---

### 🔮 3.4. Oracle Integration & On-Chain Transparency

**Verified Health Authority Data**
Oracle nodes act as trusted bridges between off-chain regulatory bodies (e.g., municipal health departments) and the blockchain, supplying independently verified inspection results.

**Public Ratings & Reports Viewer**
Any user can query the on-chain record for a given restaurant, accessing:

- **Overall Rating** — Weighted average based on verified consumer reviews
- **Health Violation Log** — Timestamped incident reports with full details
- **Oracle Verification Status** — Indicating whether each report has been confirmed by an external authority

This transparency layer allows consumers to audit a restaurant's complete safety history before dining.

---

### 📑 3.5. Blockchain Ledger & Transaction Flow

When a user submits a review, the following sequence is executed:

1. **Transaction Signing** — The user signs the submission using their connected wallet (e.g., MetaMask), ensuring cryptographic authenticity.
2. **Data Broadcast** — Review data (ratings, text, and IPFS content hashes) is transmitted to the smart contract on the target blockchain (e.g., Ethereum, Polygon).
3. **Network Confirmation** — Validators process and confirm the transaction, typically within seconds to minutes.
4. **Success Receipt** — The user receives a confirmation containing:
   - **Block Number** — The block in which the review was recorded
   - **Transaction Hash (TxHash)** — A unique, publicly verifiable proof of submission

All confirmed transactions are fully auditable via public block explorers (e.g., Etherscan), ensuring trustless and transparent operations.

---

### 🪙 3.6. Token Incentive Mechanism

**Automatic Rewards for Verified Reviews**
Upon successful validation of a review by the smart contract or oracle network, the contributor is automatically issued a **25% discount token** — with no manual approval required.

**Token Utility**
Earned tokens can be redeemed for:

- **Premium Analytics Access** — Detailed hygiene statistics and trend reports
- **Enhanced Visibility** — Priority display for the user's reviews
- **Partner Discounts** — Exclusive offers from participating restaurants and services
- **Governance Participation** — Voting rights in future DAO-based platform upgrades

**Fraud Prevention & Fair Distribution**
- **Anti-Spam Filtering** — Only unique, verified reviews qualify for token rewards.
- **Sybil Resistance** — Duplicate or bot-generated accounts are ineligible for rewards.
- **Transparent Ledger** — All token distributions are permanently recorded on-chain for full auditability.

[↑ Back to Top](#table-of-contents)

---

## ❓ 4. Why RestoChain?

RestoChain addresses a critical gap in the current food service ecosystem: the lack of a trustworthy, manipulation-resistant source of restaurant safety information.

- **No Central Point of Failure** — The decentralized architecture eliminates the risk of data manipulation by any single actor.
- **Immutable Track Record** — Every rating and incident report is permanently preserved, creating a reliable historical reference.
- **Authority-Backed Verification** — Oracle-confirmed reports carry measurable credibility, distinguishing them from unverified consumer complaints.
- **Consumer Empowerment** — Users gain access to a transparent, auditable record that enables genuinely informed dining decisions.

RestoChain does not merely rate restaurants — it holds them accountable.
