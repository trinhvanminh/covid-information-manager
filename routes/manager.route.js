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
router.get(
  "/related-covid/list/:id",
  verifyToken,
  managerController.detailCovidUser
);
router.get("/related-covid/add/", verifyToken, managerController.addCovidUser);
router.post(
  "/related-covid/add/",
  verifyToken,
  managerController.postCovidUser
);
module.exports = router;
