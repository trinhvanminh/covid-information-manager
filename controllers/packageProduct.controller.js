const e = require("express");

class PackageProductController {
  // GET List Package Product /
  listPackageProduct(req, res) {
    res.render("./products/listProducts");
  }

}

module.exports = new PackageProductController();
