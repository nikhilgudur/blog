const bcrypt = require("bcrypt");
const { SetUserInfo } = require("../db/auth.db");

/**
 *
 * @param {String} password
 * @returns {String} hash
 */
const GenHash = (password) => {
  const SALT_ROUND = 50;
  let userHash;

  bcrypt.hash(password, SALT_ROUND, (err, hash) => {
    console.log(hash);
    if (err) {
      throw new Error(err.message);
    }

    if (!hash) throw new Error("Hash not generates");
    // return hash
    userHash = hash;
  });

  return userHash;
};

const ValidateUser = (password, hash) => {
  bcrypt
    .compare(password, hash)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const StoreUserInfo = (username, hash) => {
  return new Promise((res, rej) => {
    SetUserInfo(username, hash)
      .then((result) => res(result))
      .catch((err) => rej(new Error(err)));
  });
};

module.exports = {
  ValidateUser,
  GenHash,
  StoreUserInfo,
};
