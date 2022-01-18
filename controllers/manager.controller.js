const e = require("express");

class ManagerController {
  // GET /
  relatedCovidView(req, res, next) {
    console.log(req);
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
            'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id"'
          )
          .then((data) => {
            console.log(data);
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
            res.render("manager/addCovidUser", {
              authenticated: req.authenticated,
              DSnoidieutri: data.rows,
            });
          }
        });
    }
  }
  postCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      const { hoten, cccd, diachi, trangthai, dieutri_id } = req.body;
      require("../db")
        .query(
          'INSERT INTO "Nguoi" (hoten, cccd, diachi, trangthai, dieutri_id) VALUES ($1, $2, $3, $4, $5);',
          [hoten, cccd, diachi, trangthai, dieutri_id]
        )
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("insert k thành công");
            res.render("manager/addCovidUser", {
              authenticated: req.authenticated,
            });
          } else {
            res.redirect("manager/related-covid/list");
          }
        });
    }
  }
}

module.exports = new ManagerController();
