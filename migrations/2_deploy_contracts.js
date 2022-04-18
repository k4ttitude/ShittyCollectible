// const ShittyCollectible = artifacts.require("ShittyCollectible");
const Redeemable = artifacts.require("Redeemable");

module.exports = function (deployer) {
  // deployer.deploy(ShittyCollectible);
  deployer.deploy(Redeemable(), 0xaebc7a814d657a4c0b3659c6ef98757d72a51323);
};
