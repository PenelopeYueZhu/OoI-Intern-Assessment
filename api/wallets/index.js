const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Wallet Routes");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];
  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.post("/", async (req, res) => {
  const app = req.app.get("app");
  try {
    var newWallet = {
      name: req.body.name,
      address: req.body.address,
      currency: req.body.currency,
      balance: parseInt(req.body.balance)
    }
    wallets = await app.addWallet(newWallet);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

});

router.put("/", async (req, res) => {
  const app = req.app.get("app");
  try {
    var newWallet = {
      name: req.body.name,
      address: req.body.address,
      currency: req.body.currency,
      balance: parseInt(req.body.balance)
    }
    wallets = await app.updateWallet(newWallet);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

});


router.delete("/", async (req, res) => {
  const app = req.app.get("app");
  try {
    var newWallet = {
      name: req.body.name,
      address: req.body.address,
      currency: req.body.currency,
      balance: parseInt(req.body.balance)
    }
    wallets = await app.deleteWallet(newWallet);
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);

});

module.exports = router;
