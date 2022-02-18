# Proxy sample for leveling up a Knight 
## Pre-requisite
1. Infura API KEY (Ropsten)
2. Etherscan API Key
3. Private Wallet Address (Ropsten)
___
## Installation 
```shell
npm install
```  
### **Step 1** : Deploy Knight (Output: Knight Contract Address)
```shell
npx hardhat run --network ropsten script/deploy-knight.js
```
#### Note: it should produce 3 contracts, proxy admin, transparent proxy, knight contract
___

### **Step 2**: Verify Knight Contract
```sh
npx hardhat verify --network ropsten KNIGHT_CONTRACT_ADDRESS
```
___
### **Step 3**: Set TransparentUpgradeableProxy 
On Etherscan:
1. click on *Contract Tab*
2. click on *More Options*
3. select *Is this a proxy* 
4. click on *Verify*

You should now have **Read as Proxy** and **Write as Proxy**
#### Note: variables are stored or initialized in Proxy instead of the contract
___
### **Step 4**: Upgrade Contract 
1. Create A new deploy contract (e.g. scripts/levelup-knights)
2. Change `PROXY` to your TransparentUpgradeableProxy Contract
3. Deploy
```sh
npx hardhat run --network ropsten script/levelup-knight.js
```
4. Verify the newly deployed contract again
```sh
npx hardhat verify --network ropsten KNIGHT_CONTRACT_ADDRESS
```
5. Repeat **Step 3**
___
### **Step 5**:  Use Write Proxy
___
### Preview Sample Transactions
https://ropsten.etherscan.io/address/0x16646252F49B741991b0f733cD4d1B6225acF769
