const router = require("express").Router();
const ListProductController = require("../controllers/product.controller");
const { verifyToken } = require("../jwt");

// List Product - Xuat card view
router.get("/", verifyToken, ListProductController.listProduct);
router.get("/add", verifyToken, ListProductController.addProduct);
router.get("/edit/:id", verifyToken, ListProductController.editProduct);


module.exports = router;
