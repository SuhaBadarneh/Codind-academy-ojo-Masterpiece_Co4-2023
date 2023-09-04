const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    name: String,
  },
  {
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

exports.Order = mongoose.model("Order", orderSchema);
