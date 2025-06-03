const hre = require("hardhat");

async function main() {
 
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  

  const myToken = await MyToken.deploy(1000000);
  
  await myToken.waitForDeployment();

  console.log("Token deployed to:", await myToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});