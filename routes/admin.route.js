const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { verifyToken } = require("../jwt");

// List Product - Xuat card view
router.get("/account", verifyToken, AdminController.viewAccountManager);


module.exports = router;
