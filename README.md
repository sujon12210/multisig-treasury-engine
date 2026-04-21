# Multisig Treasury Engine

This repository provides a secure, flat-structure Multi-Signature (Multisig) wallet. It is designed for DAOs and development teams to manage shared funds without relying on a single private key.

### Key Features
* **Threshold Logic:** Transactions only execute after reaching a predefined number of confirmations.
* **Proposal System:** Any owner can submit a transaction for consideration.
* **On-chain Audit Trail:** All submissions and confirmations are permanently recorded on the blockchain.

### Security
* **Owner Management:** Only existing owners can propose adding or removing owners.
* **Safe Transfers:** Built-in checks to ensure transactions are only executed once.
