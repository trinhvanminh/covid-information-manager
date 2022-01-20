class PackageProductController {
  // GET List Package Product /
  listPackageProduct(req, res) {
    const renderData = (data) => {
      res.render("./productPackages/listPackageProduct", {
        authenticated: req.authenticated,
        data: data.rows,
      });
    };
    if (req.query.q) {
      require("../db")
        .query('SELECT * FROM public."Goi" where "Goi"."ten" like $1', [
          "%" + req.query.q + "%",
        ])
        .then(renderData);
    } else if (req.query.sort && req.query.sort !== "") {
      const queryString =
        req.query.sort === "ASC"
          ? 'SELECT * FROM public."Goi" ORDER BY "ten" ASC'
          : 'SELECT * FROM public."Goi" ORDER BY "ten" DESC';
      require("../db").query(queryString).then(renderData);
    } else {
      require("../db")
        .query('select * from public."Goi" order by "Goi"."Goi_id"')
        .then(renderData)
        .catch((err) => console.log(err));
    }
  }

  // GET View Package Product /
  viewPackageProduct(req, res) {
    res.render("./productPackages/viewPackageProduct");
  }

  // GET Add Package Product /
  addPackageProductView(req, res) {
    //   Data Test
    res.render("./productPackages/addPackageProduct", {
      authenticated: req.authenticated,
    });
  }
  // POST Add Package Product /
  addPackageProduct(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      const { ten, gioihan_goi, thoigian } = req.body;
      if (ten && gioihan_goi && thoigian) {
        require("../db")
          .query(
            'insert into public."Goi" (ten, gioihan_goi, thoigian) values ($1, $2, $3)',
            [ten, gioihan_goi, thoigian]
          )
          .then((data) => {
            if (data.rowCount === 0) {
              console.log("Thêm gói nhu yếu phẩm lỗi");
              res.render("productPackages/addPackageProduct", {
                authenticated: req.authenticated,
                message: "Thêm gói nhu yếu phẩm lỗi",
                type: "warning",
              });
            } else {
              res.redirect("/package-product");
            }
          })
          .catch((err) => console.log(err));
      } else {
        res.render("productPackages/addPackageProduct", {
          authenticated: req.authenticated,
          message: "Cần đầy đủ thông tin",
          type: "warning",
        });
      }
    }
  }
  // GET edit package view
  editPackageProductView(req, res) {
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
  // PUT edit Package Product
  editPackageProduct(req, res) {
    res.render("./productPackages/editPackageProduct");
  }
  // DELETE Delete Package Product /
  deletePackageProduct(req, res) {
    try {
      if (!req.authenticated) {
        res.redirect("/");
      } else if (req.params.id) {
        require("../db")
          .query('delete FROM public."Goi" where "Goi"."Goi_id" = $1', [
            req.params.id,
          ])
          .then((data) => {
            res.redirect("/package-product");
          })
          .catch((err) => console.log(err));
      } else {
        res.redirect("/package-product");
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ status: false, message: error.message });
    }
  }
}

module.exports = new PackageProductController();
