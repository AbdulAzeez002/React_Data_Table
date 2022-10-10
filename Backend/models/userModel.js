const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email:{
        type : String ,
         unique : true,
         required : true,
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

//virtual method to populate user Orders

userSchema.virtual("orders", {
  ref: "Order",
  foreignField: "userId",
  localField: "_id",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
