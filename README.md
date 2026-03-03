# RestoChain
The project aims to build a decentralized restaurant rating system using blockchain technology and smart contracts to improve food safety standards and reduce cases of food poisoning. The system relies  on recording user reviews and reports on restaurant hygiene and food  quality on a public, immutable blockchain, ensuring transparency and  credibility.
**Key Features:**
  - **Decentralized & tamper-proof:** Ratings cannot be altered or deleted.
  - **Smart contract verification:** Reviews are validated automatically.
  - **Trusted data sources:** Integration with health authorities (Oracles) for verified inspections.
  - **Incentivized participation:** Possible token rewards for honest reviewers.
This system empowers consumers to make safer dining choices while encouraging restaurants to maintain high hygiene standards.

# Front-End
**1.Signing in with a Gmail Account:**
  - Users can easily sign in using their Gmail account.  
  - Login is integrated with Google OAuth for security and easy access.  
  - No need to create a new account or enter a password manually.
**2.Linking the Account to Reviews:**
  - Each review is linked to the email address used in Gmail.  
  - Reviews remain secure, encrypted, and stored on the blockchain while maintaining email privacy.  
  - The email is not publicly stored on the chain; instead, it is used to generate an encrypted internal identifier.
**3.Full Data Ownership:**
    - Users retain full ownership of their reviews and data.  
    - No intermediaries control or manipulate the content.  
    - The system ensures accountability and prevents fake reviews by associating each review with a trusted Gmail identity.

# Smart Contract
**Dynamic evaluation model**
  - Each entry is digitally signed and linked to a smart contract that ensures it cannot be modified later.
  - Each review is recorded in a new block associated with the restaurant address.

# Reputation System
**Food Poisoning Incident Report**
A dedicated form requesting:
  - Case description (detailed account of the incident)
  - Date & time (of the incident)
  - Order/bill number (optional)
  - Upload medical report or official certificate (for verification)
  - Optional photos (of the food, receipt, or other evidence)
Technical Process:
  - Images & reports are uploaded to IPFS (decentralized storage)
  - Linked to the review via a Smart Contract
  - Smart Contract verifies duplicate reports and stores only the hash (ensuring privacy)
  - If confirmed reports exceed a threshold, the smart contract triggers an alert mechanism (e.g., notifying health authorities or flagging the restaurant)

# Oracle
**Ratings & Reports Log (On-Chain Viewer)**
Users can view all previously recorded reviews and reports on the blockchain, including:
  - Restaurant’s overall rating (average score based on verified reviews)
  - Health violation reports (with timestamps and details)
  - Verification status of each report (confirmed by an Oracle?  **Yes /  No**)
Why This Matters?
  - **Fully transparent & decentralized:** No central database that can be manipulated.
  - **Immutable history:** All ratings and reports are permanently stored on-chain.
  - **Trustless verification:** Oracle-confirmed reports carry higher credibility.
Users can **audit restaurant safety records** before dining, ensuring informed decisions. 

# BlockChain Ledger
**User Interaction with the Smart Contract**
When submitting a review, the process works as follows:
  - **User Signs the Transaction**
    The user cryptographically signs the review submission using their wallet (e.g., MetaMask).
  - **Data is Sent to the Smart Contract**
    The review data (ratings, reports, images/IPFS hashes) is transmitted to the blockchain.
  - **Waiting for Network Confirmation**
    The transaction is processed by the blockchain (e.g., Ethereum, Polygon).
Miners/validators confirm the transaction (usually takes a few seconds to minutes).
  - **Success Notification**
    A confirmation message appears, displaying:
      - **Block Number** (where the review was recorded)
      - **Transaction Hash** (TxHash) (proof of submission)
Why This Matters?
  - **Self-Executing Logic:** The smart contract automatically enforces rules (no manual approval needed).
  - **Tamper-Proof:** Once confirmed, the review cannot be altered or deleted.
  - **Transparent & Verifiable:** Anyone can check the transaction on a block explorer (e.g., Etherscan).
This ensures **trustless, automated, and secure** review submissions. 

# Incentive Mechanism
**Token Reward System**
To incentivize high-quality reviews, the system includes a token-based reward mechanism:
1. **Automatic Rewards for Verified Reviews**
   When a user submits a **trusted review** (validated by the smart contract or oracles), they are **Automatically Rewarded** with a **25% discount token**.
   The reward is issued instantly via the smart contract without manual intervention.
2. **Token Utility (In-App Benefits)**
   Users can spend their earned tokens on:
     - **Access to premium reports** (e.g., detailed hygiene analytics)
     - **Advanced features** (e.g., priority visibility for their reviews)
     - **Exclusive discounts** (partnered restaurants or services)
     - **Governance voting** (future DAO integration for system upgrades)
3. **Fair & Fraud-Proof Distribution**
     - **Anti-Spam Mechanism:** Only verified, unique reviews qualify for rewards.
     - **Sybil-Resistant:** Duplicate or fake accounts won’t earn tokens.
     - **Transparent Ledger:** All rewards are recorded on-chain for auditability.
This model **Encourages Honest Participation** while adding real value to the ecosystem.
