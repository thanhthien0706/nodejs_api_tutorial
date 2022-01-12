const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
