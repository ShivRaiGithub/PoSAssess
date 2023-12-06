const hre = require("hardhat");
const { ethers } = hre;
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
require("dotenv").config();

async function main() {
  const networkAddress ="https://ethereum-goerli.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const Forest = await ethers.getContractFactory("Forest");
  const forest = await Forest.attach("");

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await forest.connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(forest.address, wallet.address, tokenIds[i], "0x6566");

    await depositTx.wait();
  }

  console.log("Approved and deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });