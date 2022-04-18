const { LazyMinter } = require("../libs/LazyMinter");
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [minter] = await hre.ethers.getSigners();
  const Redeemable = await hre.ethers.getContractFactory("Redeemable");
  // const redeemable = await Redeemable.deploy(minter.address);

  const ist = Redeemable.attach("0xF7EeBd7DD397eC20b8Cc5E6E8452d7dc0D96bCd6");
  const lazyMinter = new LazyMinter({
    contract: ist,
    signer: minter,
  });
  // console.log(voucher);
  const voucher = await lazyMinter.createVoucher(
    2,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topcv.vn%2Fbrand%2Fvnextglobal&psig=AOvVaw2OPOshUJWV9TJHzuBPlaOx&ust=1649843939737000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIjBwOKhjvcCFQAAAAAdAAAAABAD"
  );
  console.log(voucher);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
