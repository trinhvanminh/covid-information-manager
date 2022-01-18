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
      // Xử lý edit product to database here!
      //   const { id } = req.params; Lấy cái ID ở trên params/path
      //   const product = await Product.findById(id); Lấy cái product ở trên database - này là code cũ mongoDB
      // Thay code tìm bằng Postgres nha bạn
      //   res.render("./products/addProduct", { product });
      //   Data test cái UI sửa
      const product = {
        productName: "Sản phẩm 1",
        images: [],
        price: 10000,
        quantitative: "Cây",
      };
      res.render("./products/editProduct", { product });
    }
  }
}

module.exports = new ListProductController();
