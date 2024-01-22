const mongoose = require("mongoose");

const conn = mongoose.connection;

const userAuthSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  //   salt: {
  //     type: String,
  //     required: true,
  //   },
});

const UserAuth = new mongoose.model("UserAuth", userAuthSchema);

function CreateCollection(model) {
  return new Promise((res, rej) => {
    try {
      model.createCollection();
      res();
    } catch (err) {
      rej(new Error(err));
    }
  });
}

const GetUser = async () => {};

/**
 * Function used to save user in MongoDB
 * @param {String} username
 * @param {String} passwordHash
 * @returns {Promise}
 */
const SetUserInfo = async (username, passwordHash) => {
  return new Promise(async (res, rej) => {
    try {
      const user = new UserAuth({
        username,
        passwordHash,
      });
      await user.save();
      res("User successfully created");
    } catch (err) {
      rej(new Error(err));
    }
  });
};

const GetHash = (userName) => {
  UserAuth.find({ username: `${userName}` }).exec();
};

module.exports = {
  GetUser,
  SetUserInfo,
  GetHash,
};
