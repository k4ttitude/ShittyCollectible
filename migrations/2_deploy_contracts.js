// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");
// const DumbToken = artifacts.require("DumbToken");
const ShittyCollectible = artifacts.require("ShittyCollectible");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.deploy(DumbToken);
  deployer.deploy(ShittyCollectible);
};
