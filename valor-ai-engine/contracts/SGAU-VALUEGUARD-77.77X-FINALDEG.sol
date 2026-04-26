// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SGAU-VALUEGUARD-77.77X-FINALDEG
 * @dev Elite Patriot-Class Constitutional Runtime Engine
 *
 * Enforces the law:
 * No Evidence -> No Receipt
 * No Receipt -> No Continuity
 * No Continuity -> No Governance
 * No Governance -> No Verdict
 * No Verdict -> No Snapshot
 * No Snapshot -> No Projection
 */
contract ValueGuardFinalDegree {

    // --- Roles & Authority Domain ---
    address public owner;
    mapping(address => bool) public validators;
    mapping(address => bool) public publishers;
    mapping(address => bool) public governors;

    // --- Lineage Memories ---
    // Truth Memory
    mapping(bytes32 => bool) public receiptChainStore;
    // Authority Memory
    mapping(bytes32 => bool) public governanceChainStore;
    // Legitimacy Memory
    mapping(bytes32 => bool) public verdictChainStore;

    // --- Projection Storage ---
    struct Snapshot {
        bytes32 verdictHash;
        uint256 timestamp;
        string projectionDataURI;
    }

    mapping(bytes32 => Snapshot) private snapshots;
    bytes32 public latestSnapshotHash;

    // --- Events ---
    event ReceiptGenerated(bytes32 indexed receiptHash, bytes32 indexed evidenceHash);
    event GovernanceContinuityEnforced(bytes32 indexed governanceHash, bytes32 indexed receiptHash);
    event VerdictSealed(bytes32 indexed verdictHash, bytes32 indexed governanceHash, uint8 legitimacyScore);
    event SnapshotPublished(bytes32 indexed snapshotHash, bytes32 indexed verdictHash, string projectionDataURI);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not Authorized: Owner");
        _;
    }

    modifier onlyValidator() {
        require(validators[msg.sender], "Not Authorized: Validator");
        _;
    }

    modifier onlyGovernor() {
        require(governors[msg.sender], "Not Authorized: Governor");
        _;
    }

    modifier onlyPublisher() {
        require(publishers[msg.sender], "Not Authorized: Publisher");
        _;
    }

    constructor() {
        owner = msg.sender;
        validators[msg.sender] = true;
        governors[msg.sender] = true;
        publishers[msg.sender] = true;
    }

    // --- Access Control ---
    function grantValidator(address _addr) external onlyOwner { validators[_addr] = true; }
    function grantGovernor(address _addr) external onlyOwner { governors[_addr] = true; }
    function grantPublisher(address _addr) external onlyOwner { publishers[_addr] = true; }

    // --- Step 1: Evidence -> Receipt (Truth Memory) ---
    function generateReceipt(bytes32 evidenceHash) external onlyValidator returns (bytes32) {
        require(evidenceHash != bytes32(0), "No Evidence");
        bytes32 receiptHash = keccak256(abi.encodePacked(evidenceHash, msg.sender, "RECEIPT"));
        receiptChainStore[receiptHash] = true;

        emit ReceiptGenerated(receiptHash, evidenceHash);
        return receiptHash;
    }

    // --- Step 2: Receipt -> Governance (Authority Memory) ---
    function enforceGovernanceContinuity(bytes32 receiptHash, bytes32 authorityData) external onlyGovernor returns (bytes32) {
        require(receiptChainStore[receiptHash], "No Receipt -> No Continuity");

        bytes32 governanceHash = keccak256(abi.encodePacked(receiptHash, authorityData, msg.sender, "GOVERNANCE"));
        governanceChainStore[governanceHash] = true;

        emit GovernanceContinuityEnforced(governanceHash, receiptHash);
        return governanceHash;
    }

    // --- Step 3: Governance -> Verdict (Legitimacy Memory) ---
    function sealVerdict(bytes32 governanceHash, uint8 legitimacyScore) external onlyValidator returns (bytes32) {
        require(governanceChainStore[governanceHash], "No Governance -> No Verdict");
        require(legitimacyScore >= 80, "Verdict Failed Legitimacy Threshold");

        bytes32 verdictHash = keccak256(abi.encodePacked(governanceHash, legitimacyScore, msg.sender, "VERDICT"));
        verdictChainStore[verdictHash] = true;

        emit VerdictSealed(verdictHash, governanceHash, legitimacyScore);
        return verdictHash;
    }

    // --- Step 4: Verdict -> Snapshot (Immutable Persistence) ---
    function publishSnapshot(bytes32 verdictHash, string calldata projectionDataURI) external onlyPublisher returns (bytes32) {
        require(verdictChainStore[verdictHash], "No Verdict -> No Snapshot");

        bytes32 snapshotHash = keccak256(abi.encodePacked(verdictHash, projectionDataURI, block.timestamp));
        snapshots[snapshotHash] = Snapshot({
            verdictHash: verdictHash,
            timestamp: block.timestamp,
            projectionDataURI: projectionDataURI
        });

        latestSnapshotHash = snapshotHash;

        emit SnapshotPublished(snapshotHash, verdictHash, projectionDataURI);
        return snapshotHash;
    }

    // --- Visibility Domain (Projection Safe Read Surface) ---
    function getLatestProjection() external view returns (Snapshot memory) {
        require(latestSnapshotHash != bytes32(0), "No Snapshot -> No Projection");
        return snapshots[latestSnapshotHash];
    }

    function getProjectionByHash(bytes32 snapshotHash) external view returns (Snapshot memory) {
        require(snapshots[snapshotHash].timestamp != 0, "Snapshot Does Not Exist");
        return snapshots[snapshotHash];
    }

    function verifyContinuity(bytes32 verdictHash) external view returns (bool) {
        return verdictChainStore[verdictHash];
    }
}
