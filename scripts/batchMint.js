const hre = require("hardhat");
const forestJSON = require("../artifacts/contracts/Forest.sol/Forest.json");
require('dotenv').config()

const tokenAddress = process.env.FOREST_ADDRESS; 
const tokenABI = forestJSON.abi;
const walletAddress = ""; 

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    for(var i=0; i<5; i++)
    {
    const tx = await token.mint(walletAddress);
    await tx.wait();
    }
    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFTS");
  }
  

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });