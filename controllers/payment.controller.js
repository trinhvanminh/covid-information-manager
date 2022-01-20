const axios = require("axios");
const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

const PaymentController = {
  // [GET] /  - connect wallet
  connectWallet: async (req, res) => {
    try {
      const id = 2;
      let response = await axios(
        `http://localhost:3003/api/connect-wallet/${id}`
      );
      localStorage.setItem("idPayMent", response.data.data.rows[0].id);
      localStorage.setItem("sodu", response.data.data.rows[0].sodu);
      res.render("./user/informationUser", {
        authenticated: req.authenticated,
        message: response.data.message,
        type: "success",
        sodu: response.data.data.rows[0].sodu
      });
    } catch (error) {
      console.log(error);
    }
  },
  // [PUT] /api/payment - payment
  paymentWallet: async (req, res) => {
    try {
      const id = 2;
      const amount = 100000;
      let response = await axios.put(`http://localhost:3003/api/payment`, {
        id,
        amount,
      });
      res.render("./user/checkoutPayment", {
        authenticated: req.authenticated,
        message: response.data.message,
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = PaymentController;
