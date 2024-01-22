const mongoose = require("mongoose");

async function MongooseConnect(next) {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
    next();
  });
}

module.exports = MongooseConnect;
