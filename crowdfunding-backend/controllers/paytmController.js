const crypto = require("crypto");
const qs = require("querystring");

exports.initiatePayment = async (req, res) => {
  const { projectId, amount } = req.body;

  const params = {
    MID: process.env.PAYTM_MID,
    ORDER_ID: "ORDER_" + Date.now(),
    CUST_ID: req.userId,
    TXN_AMOUNT: amount,
    CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
    WEBSITE: process.env.PAYTM_WEBSITE,
    INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
    CALLBACK_URL: process.env.PAYTM_CALLBACK_URL,
  };

  const checksum = crypto
    .createHmac("sha256", process.env.PAYTM_MKEY)
    .update(qs.stringify(params))
    .digest("hex");

  params.CHECKSUMHASH = checksum;
  res.json(params);
};

exports.paymentCallback = async (req, res) => {
    const { ORDERID, TXNAMOUNT, STATUS } = req.body;
  
    if (STATUS === "TXN_SUCCESS") {
      await Project.findByIdAndUpdate(req.body.projectId, {
        $inc: { raisedAmount: TXNAMOUNT },
        $push: { backers: req.userId },
      });
      res.json({ message: "Payment Successful" });
    } else {
      res.status(400).json({ message: "Payment Failed" });
    }
  };
  