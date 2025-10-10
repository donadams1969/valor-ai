// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title TimeToken
 * @dev An ERC-721 token contract for issuing unique, time-stamped digital assets.
 * Minting is restricted to accounts with the MINTER_ROLE. This role is intended
 * to be held by the JULES AI agent.
 */
contract TimeToken is ERC721, AccessControl {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    /**
     * @dev A keccak256 hash of "MINTER_ROLE" to identify the role allowed to mint tokens.
     */
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @dev Initializes the contract, sets the token name and symbol,
     * and grants the deployer both the admin and minter roles.
     * @param initialOwner The address that will be granted the initial admin and minter roles.
     */
    constructor(address initialOwner) ERC721("TimeToken", "TIME") {
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(MINTER_ROLE, initialOwner);
    }

    /**
     * @dev Creates a new token and assigns it to `to`.
     * Can only be called by an account with the `MINTER_ROLE`.
     * The token URI should point to a JSON metadata file conforming to the ERC-721 standard.
     *
     * @param to The address that will receive the minted token.
     * @param uri The URI for the new token's metadata.
     * @return The ID of the newly minted token.
     */
    function safeMint(address to, string memory uri) public onlyRole(MINTER_ROLE) returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _tokenIdCounter.increment();
        return tokenId;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}