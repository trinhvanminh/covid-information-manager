const router = require("express").Router();
const ListProductController = require("../controllers/product.controller");
const { verifyToken } = require("../jwt");

// List Product - Xuat card view
router.get("/", verifyToken, ListProductController.listProduct);
router.get("/add", verifyToken, ListProductController.addProduct);

module.exports = router;
