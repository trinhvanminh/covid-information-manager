const e = require("express");

class UserSystemController {
  // GET Information User /
  viewInforUser(req, res) {
    res.render("./user/informationUser");
  }
 
}

module.exports = new UserSystemController();
