// backend/scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const PongNFT = await ethers.getContractFactory("PongNFT");
  const pongNFT = await PongNFT.deploy("http://base-uri.com/");
  console.log("PongNFT deployed to:", pongNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});