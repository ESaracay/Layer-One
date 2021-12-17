const SlimeContract = artifacts.require("SlimeContract");

module.exports = function (deployer) {
  deployer.deploy(SlimeContract);
};