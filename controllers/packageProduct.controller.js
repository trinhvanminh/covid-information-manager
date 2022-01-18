const e = require("express");

class PackageProductController {
  // GET List Package Product /
  listPackageProduct(req, res) {
    res.render("./productPackages/listPackageProduct");
  }

  // GET View Package Product /
  viewPackageProduct(req, res) {
    res.render("./productPackages/viewPackageProduct");
  }
}

module.exports = new PackageProductController();
