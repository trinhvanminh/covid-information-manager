const router = require("express").Router();
const UserSystemController = require("../controllers/userSystem.controller");
const { verifyToken } = require("../jwt");

// View Personal information
router.get("/information", verifyToken, UserSystemController.viewInforUser);

module.exports = router;
