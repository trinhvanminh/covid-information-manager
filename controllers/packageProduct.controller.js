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

  // POST Add Package Product /
  addPackageProduct(req, res) {
    res.render("./productPackages/addPackageProduct");
  }
}

module.exports = new PackageProductController();
