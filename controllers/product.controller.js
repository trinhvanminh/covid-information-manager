class ListProductController {
  // GET List Product /
  listProduct(req, res) {
    require("../db")
      .query('SELECT * FROM public."SP"')
      .then((data) => {
        const spwithLinks = Promise.all(
          data.rows.map((ele, idx) => {
            return require("../db")
              .query(
                'SELECT * FROM public."HinhAnh" where "HinhAnh"."sp_id" = $1',
                [ele.SP_id]
              )
              .then((hinhanh) => {
                data.rows[idx].links = hinhanh.rows.map((h) => h.link);
                return data.rows[idx];
              })
              .catch((err) => console.log(err));
          })
        );
        spwithLinks.then((SpWithLinks) => {
          res.render("./products/listProducts", {
            authenticated: req.authenticated,
            data: SpWithLinks,
          });
        });
      });
  }

  //   POST Add Product
  addProduct(req, res) {
    // res.render("./products/addProduct");
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("./products/addProduct");
      // Xử lý add product to database here!
    }
  }
  //   PATCH Edit Product
  editProduct(req, res) {
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
  //   DELETE Delete Product
  deleteProduct(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      // Xử lý delete product to database here!
      //   const { id } = req.params; Lấy cái ID ở trên params/path
      //   const product = await Product.findById(id); Lấy cái product ở trên database - này là code cũ mongoDB
      // Thay code tìm bằng Postgres nha bạn - Delete here
      res.render("./products/listProducts");
    }
  }
}

module.exports = new ListProductController();
