const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/db_learn_api_tutorial", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfuly!!!");
  } catch (err) {
    console.log("Connect failure with error: " + err);
  }
}

module.exports = { connect };
