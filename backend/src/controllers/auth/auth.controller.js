const { ValidateUser, GenHash } = require("../../services/authService");
const { StoreUserInfo } = require("../../services/authService");

const USERNAME = "nikhilgudur";
const PASSWORD = "nick3011";

async function AuthValidator(req, res) {
  const { username, password } = req.body;

  ValidateUser(password);
}

async function AuthSignup(req, res) {
  const { username, password } = req.body;
  const hash = GenHash(password);
  console.log(hash);
  try {
    StoreUserInfo(username, hash).then((result) => {
      console.log(result);
      res
        .json({
          status: 200,
          message: "User sign up success",
        })
        .catch((err) => console.error(err));
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  AuthValidator,
  AuthSignup,
};
