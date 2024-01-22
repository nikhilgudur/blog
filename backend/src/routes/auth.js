const { router } = require("../configs/express");
const {
  AuthValidator,
  AuthSignup,
} = require("../controllers/auth/auth.controller");

router.post("/login", AuthValidator);
router.post("/signup", AuthSignup);

module.exports = router;
