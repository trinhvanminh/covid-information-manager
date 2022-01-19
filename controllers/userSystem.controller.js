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

  // GET Cart User /
  cartUser(req, res) {
    res.render("./user/cartUser");
  }
 
}

module.exports = new UserSystemController();
