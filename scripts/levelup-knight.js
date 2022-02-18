const { ethers, upgrades } = require('hardhat')

const PROXY = "0x2c46cB00BF480B4b4e2E4FC09a59D5659AD16B59";

async function main(){
    const KnightLevelup = await ethers.getContractFactory('Knight_levelup');

    await upgrades.upgradeProxy(PROXY, KnightLevelup)
    
    console.log("Knight level up")
};

main();