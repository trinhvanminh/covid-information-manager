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

  // GET Add Location Isolation /
  addLocationIsolation(req, res) {
    res.render("./admin/locationISO/addLocationIsolation");
  }

  // GET Edit Location Isolation /
  editLocationIsolation(req, res) {
    res.render("./admin/locationISO/editLocationIsolation");
  }
}

module.exports = new AdminController();
