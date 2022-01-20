const e = require("express");
const db = require("../db");

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
    db.query('SELECT * FROM public."NoiDieuTri"').then((data) => {
      console.log(data);
      res.render("./admin/locationISO/listLocationIsolation", {
        authenticated: req.authenticated,
        data: data.rows,
      });
    });

    // res.render("./admin/locationISO/listLocationIsolation");
  }
  // GET Add Location Isolation /
  addLocationIsolationView(req, res) {
    res.render("./admin/locationISO/addLocationIsolation", {
      authenticated: req.authenticated,
    });
  }

  // POST Add Location Isolation /
  addLocationIsolation(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      let { ten, DieuTri_diachi, controng, succhua } = req.body;
      db.query(
        `INSERT INTO public."NoiDieuTri"("ten", "DieuTri_diachi", "succhua", "controng") VALUES ('${ten}', '${DieuTri_diachi}', '${succhua}', '${controng}')`
      ).then(() => {
        res.redirect("/admin/location");
      });
    }
  }
  // console.log(req.body);

  // GET Edit Location Isolation /
  editViewLocationIsolation(req, res) {
    const dataTest = {
      id: 1,
      name: "Địa điểm điều trị",
      succhua: 1000,
      controng: 200,
    };
    res.render("./admin/locationISO/editLocationIsolation", { dataTest });
  }

  // POST Edit Location Isolation /
  editLocationIsolation(req, res) {
    res.render("./admin/locationISO/editLocationIsolation");
  }
}

module.exports = new AdminController();
