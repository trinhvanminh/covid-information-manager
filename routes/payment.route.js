const router = require("express").Router();
const payemntController = require("../controllers/payment.controller");
const { verifyToken } = require("../jwt");

router.get("/", verifyToken, payemntController.connectWallet);

module.exports = router;
