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
    res.render("./productPackages/addPackageProduct");
  }

  editPackageProduct(req, res) {
    try {
      const dataTest = {
        id: "23121",
        packageName: "Package 12222",
        listProduct: [],
        limitQuantity: 2,
        limitPerson: 3,
        limitTime: 10,
      };

      if (req.params.id === dataTest.id) {
        res.render("./productPackages/editPackageProduct", { dataTest });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
  }

  // DELETE Delete Package Product /
  deletePackageProduct(req, res) {
    try {
      // Delete Data here
      res.redirect("/package-product");
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
  }
}

module.exports = new PackageProductController();
