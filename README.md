# Polygon
## NFT Transfer

This Solidity program is a simple program that can be used by a user to mint NFTS and then transfer them across to polygon.




## Description

This program contains solidity contract which implements ERC721 contract by openzeppelin to mint. It also contains the scripts : deploy.js, batchMint.js, and approveDeposit.js which can be used to interact with the contract. NFT_Data contains the id and address of the NFTs that were created using image generator tool (playgroundai.com) was used here to create the NFTs and Pinata was used to store them on ipfs server (web3 - decentralized).




## Getting Started

### Installing
Hardhat was used in this case to deploy the contract and interact with it using scripts.

### Executing program

You can use various code editors to run this program. VS Code was used here for the demo.
Paste your private key in .env file.
You can use deploy.js to deploy the contract and you will be provided with an address. Use this address in your .env too if you wish to interact using approveDepost.js and batchMint.js too.
batchMint.js is used to mint the NFTS with only one command. approveDeposit.js is used to approve the transfer of NFTs to polygon network.



## Authors
Shiv  
