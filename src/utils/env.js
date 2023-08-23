require("dotenv").config();

module.exports = {
  APP_NAME: process.env.APP_NAME || "Example App",
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
};
