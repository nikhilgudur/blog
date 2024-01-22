const { app } = require("./src/configs/express");
const PORT = process.env.PORT || 3000;
const MongooseConnect = require("./src/configs/mongoose");

// MongooseConnect();

app.use("/", require("./src/routes/ping"));

app.use("/auth", require("./src/routes/auth"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
