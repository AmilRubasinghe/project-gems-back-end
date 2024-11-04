const dotenv = require("dotenv");
dotenv.config();

const APPLICATION = {
  MONGO_URL: process.env.MONGO_URL,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  CLIENT_URL: process.env.CLIENT_URL,
};

module.exports = { APPLICATION };
