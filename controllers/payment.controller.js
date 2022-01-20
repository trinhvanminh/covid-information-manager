const axios = require("axios");

const PaymentController = {
  // [GET] /  - connect wallet
  connectWallet: async (req, res) => {
    try {
      const id = 2;
      let response = await axios(
        `http://localhost:3003/api/connect-wallet/${id}`
      );
      console.log(response.data.rows[0]);
    } catch (error) {
      console.log(error);
    }
  },
  // [PUT] /api/payment - payment
  paymentWallet: async (req, res) => {
    try {
      const id = 2;
      const amount = 100000;
      let response = await axios.patch(`http://localhost:3003/api/payment`, {
        id,
        amount,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = PaymentController;
