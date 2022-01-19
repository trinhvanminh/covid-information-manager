const router = require("express").Router();
const UserSystemController = require("../controllers/userSystem.controller");
const { verifyToken } = require("../jwt");

// View Personal information
router.get("/information", verifyToken, UserSystemController.viewInforUser);
router.get("/notify-payment", verifyToken, UserSystemController.notifyPaymentUser);


module.exports = router;
