const e = require("express");

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
    res.render("./admin/locationISO/listLocationIsolation");
  }
  // GET Add Location Isolation /
  addLocationIsolation(req, res) {
    res.render("./admin/locationISO/addLocationIsolation");
  }
  // GET Edit Location Isolation /
  editLocationIsolation(req, res) {
    const dataTest = {
      id: 1,
      name: "Địa điểm điều trị",
      suchua: 1000,
      controng: 200,
    };
    res.render("./admin/locationISO/editLocationIsolation", { dataTest });
  }
}

module.exports = new AdminController();
