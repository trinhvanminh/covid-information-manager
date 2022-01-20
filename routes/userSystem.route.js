const router = require("express").Router();
const UserSystemController = require("../controllers/userSystem.controller");
const { verifyToken } = require("../jwt");

// View Personal information
router.get("/information", verifyToken, UserSystemController.viewInforUser);
router.get("/notify-payment", verifyToken, UserSystemController.notifyPaymentUser);
router.get("/cart", verifyToken, UserSystemController.cartUser);
router.get("/checkout", verifyToken, UserSystemController.checkoutUser);
router.get("/checkout/payment", verifyToken, UserSystemController.checkoutCartUser);
router.get("/balance", verifyToken, UserSystemController.balanceUser);
router.get("/connect", verifyToken, UserSystemController.connectWalletUser);
router.post("/connect", verifyToken, UserSystemController.connectPostWalletUser);
router.get("/change-password", verifyToken, UserSystemController.changePasswordViewUser);
router.post("/change-password", verifyToken, UserSystemController.changePasswordUser);


module.exports = router;
