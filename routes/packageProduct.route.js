const router = require("express").Router();
const PackageProductController = require("../controllers/packageProduct.controller");
const { verifyToken } = require("../jwt");

router.get("/", verifyToken, PackageProductController.listPackageProduct);

module.exports = router;
