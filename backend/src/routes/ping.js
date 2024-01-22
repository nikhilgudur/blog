const { router } = require("../configs/express");

router.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = router;
