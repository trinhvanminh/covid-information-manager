const router = require("express").Router();
const ListProductController = require("../controllers/product.controller");

// List Product - Xuat card view
router.get("/", ListProductController.listProduct);

module.exports = router;
