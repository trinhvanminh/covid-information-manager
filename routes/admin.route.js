const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { verifyToken } = require("../jwt");

// List Manager
router.get("/account", verifyToken, AdminController.viewAccountManager);
// History Manager
router.get("/account/:id", verifyToken, AdminController.historyAccountManager);

module.exports = router;
