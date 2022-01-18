const e = require("express");

class ManagerController {
  // GET /
  relatedCovidView(req, res, next) {
    // console.log(req);
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      if (req.query.q) {
        require("../db")
          .query(
            'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" WHERE "hoten" LIKE $1;',
            ["%" + req.query.q + "%"]
          )
          .then((data) => {
            if (data.rowCount == 0) {
              console.log("khong co du lieu");
              res.render("manager/related", {
                authenticated: req.authenticated,
              });
            } else {
              res.render("manager/related", {
                authenticated: req.authenticated,
                data: data.rows,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        require("../db")
          .query(
            'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" ORDER BY "Nguoi_id" ASC'
          )
          .then((data) => {
            // console.log(data);
            if (data.rowCount == 0) {
              console.log("khong co du lieu");
              res.render("manager/related", {
                authenticated: req.authenticated,
              });
            } else {
              res.render("manager/related", {
                authenticated: req.authenticated,
                data: data.rows,
              });
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }
  detailCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      require("../db")
        .query(
          'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" where "Nguoi_id" = $1',
          [req.params.id]
        )
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/detailUser", {
              authenticated: req.authenticated,
            });
          } else {
            res.render("manager/detailUser", {
              authenticated: req.authenticated,
              data: data.rows[0],
            });
          }
        });
    }
  }
  addCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      require("../db")
        .query('SELECT * FROM public."NoiDieuTri"')
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/addCovidUser", {
              authenticated: req.authenticated,
            });
          } else {
            require("../db")
              .query('SELECT * FROM public."Nguoi" ORDER BY "Nguoi_id" ASC')
              .then((nguoi) => {
                res.render("manager/addCovidUser", {
                  authenticated: req.authenticated,
                  DSnoidieutri: data.rows,
                  DSNguoi: nguoi.rows,
                  maxNguoiId: nguoi.rows[nguoi.rows.length - 1].Nguoi_id,
                });
              });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  postCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      // console.log(req.body);
      const {
        hoten,
        cccd,
        namsinh,
        diachi,
        trangthai,
        dieutri_id,
        lichsu,
        Nguoi_id,
        maxNguoiId,
      } = req.body;
      require("../db")
        .query(
          'INSERT INTO "Nguoi" (hoten, cccd, namsinh, diachi, trangthai, dieutri_id, lichsu) VALUES ($1, $2, $3, $4, $5, $6, $7);',
          [hoten, cccd, namsinh, diachi, trangthai, dieutri_id, lichsu]
        )
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("insert k thành công");
            res.render("manager/addCovidUser", {
              authenticated: req.authenticated,
            });
          } else if (Nguoi_id) {
            require("../db").query(
              'INSERT INTO "NguoiLienQuan" (nguoi_id, nlq_id) VALUES ($1, $2);',
              [maxNguoiId, Nguoi_id]
            );
            res.redirect("manager/related-covid/list");
          } else {
            res.redirect("manager/related-covid/list");
          }
        })
        .catch((err) => console.log(err));
    }
  }
}

module.exports = new ManagerController();
