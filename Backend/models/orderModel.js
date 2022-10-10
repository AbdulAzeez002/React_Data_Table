const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    status:{
        type: String,
        enum: ["PENDING","DELIVERED"],
        default:"PENDING",
        require:true
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;