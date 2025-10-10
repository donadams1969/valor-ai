// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title IGenesisAnchor
 * @dev Interface for the GenesisAnchor contract.
 */
interface IGenesisAnchor {
    /**
     * @dev Anchors a payload digest on-chain.
     * @param digest The content-addressable hash of the payload.
     * @param signer The address that signed the payload.
     * @param uri A URI pointing to the off-chain payload (e.g., IPFS).
     * @param signature The EIP-712 signature for verification.
     */
    function anchor(bytes32 digest, address signer, string calldata uri, bytes calldata signature) external;
}

/**
 * @title GenesisAnchor
 * @dev This contract is responsible for anchoring data digests on the VALORCHAIN-G.
 * It is controlled by a designated JULES AI agent contract.
 */
contract GenesisAnchor is IGenesisAnchor, Ownable {
    address public julesAgentAddress;

    /**
     * @dev Emitted when a new payload is anchored.
     */
    event PayloadAnchored(
        bytes32 indexed digest,
        address indexed signer,
        string uri,
        uint256 timestamp
    );

    /**
     * @dev Throws if called by any account other than the JULES AI agent contract.
     */
    modifier onlyJulesAgent() {
        require(msg.sender == julesAgentAddress, "GenesisAnchor: Caller is not the authorized JULES AI agent");
        _;
    }

    /**
     * @dev Initializes the contract, setting the deployer as the initial owner.
     */
    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @dev Sets the address of the JULES AI agent contract. Can only be called by the owner.
     * @param _julesAgentAddress The address of the agent contract.
     */
    function setJulesAgentAddress(address _julesAgentAddress) external onlyOwner {
        require(_julesAgentAddress != address(0), "GenesisAnchor: Agent address cannot be the zero address");
        julesAgentAddress = _julesAgentAddress;
    }

    /**
     * @dev Implementation of the anchor function from IGenesisAnchor.
     * This function can only be called by the authorized JULES AI agent.
     * It records the digest, signer, and URI by emitting an event.
     */
    function anchor(bytes32 digest, address signer, string calldata uri, bytes calldata signature)
        external
        override
        onlyJulesAgent
    {
        // The signature is passed for transparency and potential off-chain/L2 verification,
        // but the on-chain trust assumption is that the `JulesAgent` has already verified it.
        emit PayloadAnchored(digest, signer, uri, block.timestamp);
    }
}