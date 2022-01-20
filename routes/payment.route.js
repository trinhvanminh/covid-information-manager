const router = require("express").Router();
const payemntController = require("../controllers/payment.controller");
const { verifyToken } = require("../jwt");

router.get("/", verifyToken, payemntController.connectWallet);
// Thanh Toan
router.get("/checkout", verifyToken, payemntController.paymentWallet);


module.exports = router;
