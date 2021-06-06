const DexSwap = artifacts.require("DexSwap");

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const lockFromBlock = 13546394; // Blocker number 13546394 (on mainnet) ~ 2021-11-1 00:00 +08 timezone
const lockToBlock = 15935486;   // Blocker number 13546394 (on mainnet) ~ 2022-11-1 00:00 +08 timezone

module.exports = async function (deployer) {
  await deployProxy(DexSwap, [lockFromBlock, lockToBlock], {
    deployer,
    initializer: '__DexSwap_init'
  });
}