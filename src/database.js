let mongoose = require("mongoose");
require("dotenv").config();

function connect() {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected successfuly");
    })

    .catch((err) => {
      console.error(err);
    });
}

module.exports = connect;
