const { LazyMinter } = require("./libs/LazyMinter");

const lazyMinter = new LazyMinter({
  contract: "0xF7EeBd7DD397eC20b8Cc5E6E8452d7dc0D96bCd6",
  signer: "0xBCB94b6C49bfDECeCe08C7BBF27Ac5206e9339F2",
});
const voucher = lazyMinter
  .createVoucher(
    1,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FGoogle_Images&psig=AOvVaw1zCQfyJf1slu1Iq0l-Tmkm&ust=1649843295384000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiPqa6fjvcCFQAAAAAdAAAAABAD"
  )
  .then(console.log);
// console.log(voucher);
