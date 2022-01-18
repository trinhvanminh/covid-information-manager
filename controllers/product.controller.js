const e = require("express");

class ListProductController {
  // GET /
  listProduct(req, res, next) {
    res.render("./products/listProducts");
  }

  addProduct(req, res, next) {
    // res.render("./products/addProduct");
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("./products/addProduct");
      // Xử lý add product to database here!
    }
  }

  editProduct(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("./products/addProduct");
      // Xử lý add product to database here!
    }
  }
}

module.exports = new ListProductController();
