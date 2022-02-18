const { ethers, upgrades } = require('hardhat')

async function main(){
    const Knight = await ethers.getContractFactory('Knight');

    const knight = await upgrades.deployProxy(Knight, ["gentlyawesome"], {
        initializer : "initialize"
    })

    await knight.deployed();

    console.log("Knight deployed: " + knight.address)
};

main();