const router = require("express").Router();
const managerController = require("../controllers/manager.controller");
const { verifyToken } = require("../jwt");
// /manager/
// [GET] /manager/related-covid/list
router.get(
  "/related-covid/list",
  verifyToken,
  managerController.relatedCovidView
);

module.exports = router;
