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
    //   Data Test
    res.render("./productPackages/addPackageProduct", { products });
  }

  editPackageProduct(req, res) {

    const dataTest = {
      id: 1,
      name: "Package 1",
      listProduct: [],
      limitQuantity: 2,
      limitPerson: 3,
      limitTime: 10,
    }

    res.render("./productPackages/editPackageProduct", {dataTest});
  }
}

module.exports = new PackageProductController();
