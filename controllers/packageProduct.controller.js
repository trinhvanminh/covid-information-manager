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
    const products = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        quantity: 10,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        quantity: 20,
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
        quantity: 30,
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
        quantity: 40,
      },
    ];
    res.render("./productPackages/addPackageProduct", { products });
  }
}

module.exports = new PackageProductController();
