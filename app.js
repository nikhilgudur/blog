const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.json({
    status: 200,
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
