// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IGenesisAnchor
 * @dev Interface for the GenesisAnchor contract, as specified in the deployment profile.
 */
interface IGenesisAnchor {
    function anchor(bytes32 digest, address signer, string calldata uri, bytes calldata signature) external;
}

/**
 * @title JulesAgent
 * @dev This agent contract acts as a trusted proxy to the GenesisAnchor contract.
 * It follows the integration pattern described in the JULES AI deployment profile.
 * While the JULES AI system also handles $TIME token minting, this specific
 * contract focuses on the GenesisAnchor integration.
 */
contract JulesAgent {
    IGenesisAnchor public immutable anchorContract;

    /**
     * @dev Initializes the agent with the address of the GenesisAnchor contract.
     * @param _anchor The address of the deployed GenesisAnchor contract.
     */
    constructor(address _anchor) {
        require(_anchor != address(0), "JulesAgent: Anchor address cannot be the zero address");
        anchorContract = IGenesisAnchor(_anchor);
    }

    /**
     * @dev Relays an anchor request to the GenesisAnchor contract.
     * The original caller of this function is passed as the `signer`.
     * The GenesisAnchor contract is expected to only allow calls from this agent contract.
     * @param digest The content-addressable hash of the payload.
     * @param uri A URI pointing to the off-chain payload (e.g., IPFS).
     * @param sig The signature of the digest from the signer.
     */
    function anchorPayload(bytes32 digest, string calldata uri, bytes calldata sig) external {
        anchorContract.anchor(digest, msg.sender, uri, sig);
    }
}