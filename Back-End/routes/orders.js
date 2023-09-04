const express = require("express");

const router = express.Router();
const { Order } = require("../models/order");

router.get("/", async (req, res) => {
  const ordersList = await Order.find();
  if (!ordersList) {
    res.status(500).json({ success: false });
  }
  res.send(ordersList);
});
router.post("/", async (req, res) => {
  const order = new Order({
    name: req.body.name,
  });
  order
    .save()
    .then((createdOrder) => {
      res.status(201).json(createdOrder);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

module.exports = router;
