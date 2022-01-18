const e = require("express");

class ListProductController {
  // GET /
  listProduct(req, res, next) {
    res.render("./products/listProducts");
  }
}

module.exports = new ListProductController();
