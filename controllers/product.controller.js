const db = require("../db");
const cloudinary = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
class ListProductController {
  // GET List Product /
  listProduct(req, res) {
    const renderData = (data) => {
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
    };
    if (req.query.q) {
      require("../db")
        .query('SELECT * FROM public."SP" where "SP"."ten" like $1', [
          "%" + req.query.q + "%",
        ])
        .then(renderData);
    } else if (req.query.sort && req.query.sort !== "") {
      const queryString =
        req.query.sort === "ASC"
          ? 'SELECT * FROM public."SP" ORDER BY "ten" ASC'
          : 'SELECT * FROM public."SP" ORDER BY "ten" DESC';
      require("../db").query(queryString).then(renderData);
    } else {
      require("../db").query('SELECT * FROM public."SP"').then(renderData);
    }
  }

  //   GET Add Product View
  addProductView(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("./products/addProduct", { authenticated: req.authenticated });
    }
  }
  // ------------ CHUA XONG ---------------
  //   POST Add Product
  addProduct(req, res) {
    // res.render("./products/addProduct");
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      const files = req.files?.hinhanh;
      if (!files)
        return res.render("./products/addProduct", {
          authenticated: req.authenticated,
          message: "cần có hình ảnh sản phẩm",
          type: "warning",
        });
      if (Array.isArray(files)) {
        const data = Promise.all(
          files.map((file) => {
            return cloudinary.v2.uploader.upload(
              file.tempFilePath,
              { folder: "Covid-Info" },
              (err, result) => {
                if (err) throw err;
                removeTmp(file.tempFilePath);
                //   result.url này là link của ảnh được upload lên cloundinary
                return result.url;
              }
            );
          })
        );
        data.then((urls) => insertSP(req.body, urls));
      } else {
        const data = cloudinary.v2.uploader.upload(
          files.tempFilePath,
          { folder: "Covid-Info" },
          (err, result) => {
            if (err) throw err;
            removeTmp(files.tempFilePath);
            //   result.url này là link của ảnh được upload lên cloundinary
            return [result.url];
          }
        );
        data.then((urls) => insertSP(req.body, urls));
      }

      function insertSP({ ten, gia, donvi }, urls) {
        db.query(
          'insert into public."SP" (ten, gia, donvi) values ($1, $2, $3) returning "SP"."SP_id"',
          [ten, gia, donvi]
        )
          .then((data) => {
            const insertId = data.rows[0].SP_id;
            // console.log(insertId);
            return insertId;
          })
          .then((id) => insertHinhAnh(id, urls))
          .catch((err) => console.log(err));
      }
      function insertHinhAnh(insertId, urls) {
        const r = Promise.all(
          urls.map((link) => {
            return db.query(
              'insert into public."HinhAnh" (sp_id, link) values ($1, $2)',
              [insertId, link.url]
            );
          })
        );
        r.then((data) => {
          if (data.rowCount === 0) {
            console.log("insert hinh anh loi");
            res.render("products/addProduct", {
              authenticated: req.authenticated,
              message: "Thêm hình ảnh lỗi",
              type: "warning",
            });
          } else {
            res.redirect("/list-product");
            res.render("products/listProducts", {
              authenticated: req.authenticated,
              message: "Đã thêm thành công",
              type: "success",
            });
          }
        }).catch((err) => console.log(err));
      }
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
  // ------------ CHUA XONG ---------------
  //   DELETE Delete Product
  deleteProduct(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else if (req.params.id) {
      require("../db")
        .query('delete FROM public."SP" where "SP"."SP_id" = $1', [
          req.params.id,
        ])
        .then((data) => {
          if (data.rowCount === 0) {
            console.log("xoas khong thanh cong");
            res.redirect("/list-product");
            res.render("products/listProducts", {
              authenticated: req.authenticated,
              message: "xoá không thành công",
              type: "warning",
            });
          } else {
            res.redirect("/list-product");
          }
        })
        .catch((err) => console.log(err));
    } else {
      res.redirect("/list-product");
    }
  }
}

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = new ListProductController();
