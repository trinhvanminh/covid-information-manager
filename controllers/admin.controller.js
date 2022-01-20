const e = require("express");
const db = require("../db");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

class AdminController {
  // GET View Account Manager /
  viewAccountManager(req, res) {
    res.render("./admin/accountManager/accountManager");
  }
  // GET History Account Manager /
  historyAccountManager(req, res) {
    res.render("./admin/accountManager/historyAccountManager");
  }
  // GET List Location Isolation /
  listLocationIsolation(req, res) {
    // select all table NoiDieuTri
    const role = localStorage.getItem("role");
    const updateConTrong = (id) => {
      const queryStr = `
      update public."NoiDieuTri"
      set "controng" = 
      (select 
      (select succhua from public."NoiDieuTri" where "NoiDieuTri"."DieuTri_id" = $1)
      -
      (SELECT Count(*)
      FROM public."Nguoi" 
      left JOIN public."NoiDieuTri" 
      on "Nguoi"."dieutri_id" = "NoiDieuTri"."DieuTri_id" 
      where "NoiDieuTri"."DieuTri_id" = $1))
      where "NoiDieuTri"."DieuTri_id" = $1`;

      return db.query(queryStr, [id]);
    };

    db.query('SELECT * FROM public."NoiDieuTri"').then((data) => {
      const DS_DieuTri_id = data.rows.map(
        (noidieutri) => noidieutri.DieuTri_id
      );
      const re = Promise.all(DS_DieuTri_id.map(updateConTrong));
      re.then((d) => {
        console.log(d);
        res.render("./admin/locationISO/listLocationIsolation", {
          authenticated: req.authenticated,
          data: data.rows,
          role,
        });
      });
    });

    // res.render("./admin/locationISO/listLocationIsolation");
  }
  // GET Add Location Isolation /
  addLocationIsolationView(req, res) {
    const role = localStorage.getItem("role");
    res.render("./admin/locationISO/addLocationIsolation", {
      authenticated: req.authenticated,
      role,
    });
  }

  // POST Add Location Isolation /
  addLocationIsolation(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      let { ten, DieuTri_diachi, succhua } = req.body;
      db.query(
        `INSERT INTO public."NoiDieuTri"("ten", "DieuTri_diachi", "succhua") VALUES ('${ten}', '${DieuTri_diachi}', '${succhua}')`
      ).then(() => {
        res.redirect("/admin/location");
      });
    }
  }
  // console.log(req.body);

  // GET Edit Location Isolation /
  editViewLocationIsolation(req, res) {
    const idNoiDieuTri = req.params.id;
    const role = localStorage.getItem("role");
    db.query(
      `SELECT * FROM public."NoiDieuTri" WHERE "DieuTri_id" = ${idNoiDieuTri}`
    ).then((data) => {
      res.render("./admin/locationISO/editLocationIsolation", {
        authenticated: req.authenticated,
        data: data.rows[0],
        role,
      });
    });
  }

  // POST Edit Location Isolation /
  editLocationIsolation(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      let { ten, DieuTri_diachi, succhua } = req.body;
      const idNoiDieuTri = req.params.id;
      db.query(
        `UPDATE public."NoiDieuTri" SET "ten" = '${ten}', "DieuTri_diachi" = '${DieuTri_diachi}', "succhua" = '${succhua}' WHERE "DieuTri_id" = ${idNoiDieuTri}`
      ).then(() => {
        res.redirect("/admin/location");
      });
    }
  }
}

module.exports = new AdminController();
