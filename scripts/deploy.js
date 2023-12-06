const hre = require("hardhat");

async function main() {

  const Forest = await hre.ethers.deployContract("Forest.sol");
  const forest = await Forest.deploy();

  await nft.deployed();
  console.log("Contract address: ", forest.address());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});