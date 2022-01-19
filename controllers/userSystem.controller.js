const e = require("express");

class UserSystemController {
  // GET Information User /
  viewInforUser(req, res) {
    res.render("./user/informationUser");
  }

  // GET Notify Payment User /
  notifyPaymentUser(req, res) {
    res.render("./user/notifyPayment");
  }
 
}

module.exports = new UserSystemController();
