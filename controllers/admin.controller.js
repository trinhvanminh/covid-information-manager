const e = require("express");

class AdminController {
  // GET View Account Manager /
  viewAccountManager(req, res) {
    res.render("./admin/accountManager/accountManager");
  }
 // GET History Account Manager /
  historyAccountManager(req, res){
    res.render("./admin/accountManager/historyAccountManager");
  }
}

module.exports = new AdminController();
