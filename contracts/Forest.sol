// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Forest is ERC721 {
    address public owner;
    uint256 public tokenID = 0;
    uint256 public maxQuantity = 5;

    string public promptDescription = "forest glowing in the dark";

    constructor() ERC721("Forest", "FRST") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call function");
        _;
    }

    modifier mintable() {
        require(tokenID + 1 <= maxQuantity, "You can not mint more than 5");
        _;
    }

    function mint(address to) public  onlyOwner mintable returns(uint256){
        tokenID++;

        _safeMint(to, tokenID);
        return tokenID;
    }

    function getPromptDescription() external view returns (string memory) {
        return promptDescription;
    }
}
