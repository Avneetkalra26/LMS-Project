const mongoose = require("mongoose");

require("dotenv").config();
const db_connect = () => {
  mongoose
    .connect(process.env.db_url)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.log(`Error in DB Connection ${error}`);
      process.exit(1);
    });
};

module.exports = db_connect;
