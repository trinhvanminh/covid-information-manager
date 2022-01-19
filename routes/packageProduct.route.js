const router = require("express").Router();
const PackageProductController = require("../controllers/packageProduct.controller");
const { verifyToken } = require("../jwt");

router.get("/", verifyToken, PackageProductController.listPackageProduct);
router.get("/view/:id", verifyToken, PackageProductController.viewPackageProduct);
router.get("/add", verifyToken, PackageProductController.addPackageProduct);
router.get("/edit/:id", verifyToken, PackageProductController.editPackageProduct);




module.exports = router;
