const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const { verifyToken } = require("../jwt");

// List Manager
router.get("/account", verifyToken, AdminController.viewAccountManager);
// History Manager
router.get("/account/:id", verifyToken, AdminController.historyAccountManager);
// List Địa điểm điều trị/Cách Ly
router.get("/location", verifyToken, AdminController.listLocationIsolation);
// View Them Địa điểm điều trị/Cách Ly
router.get("/location/add", verifyToken, AdminController.addLocationIsolationView);
// View Them Địa điểm điều trị/Cách Ly
router.post("/location/add", verifyToken, AdminController.addLocationIsolation);
// View Địa điểm điều trị/Cách Ly
router.get("/location/edit/:id", verifyToken, AdminController.editViewLocationIsolation);
// Edit Địa điểm điều trị/Cách Ly
router.post("/location/edit/:id", verifyToken, AdminController.editLocationIsolation);

module.exports = router;
