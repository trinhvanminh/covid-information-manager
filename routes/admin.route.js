const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { verifyToken } = require("../jwt");

// List Manager
router.get("/account", verifyToken, AdminController.viewAccountManager);
// History Manager
router.get("/account/:id", verifyToken, AdminController.historyAccountManager);
// Thêm Địa điểm điều trị/Cách Ly
router.get("/location", verifyToken, AdminController.addLocationIsolation);
// Edit Địa điểm điều trị/Cách Ly
router.get("/location/edit/:id", verifyToken, AdminController.editLocationIsolation);

module.exports = router;
