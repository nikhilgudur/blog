const express = require("express");
const cors = require("cors");
// const passport = require("passport");
const methodOverride = require("method-override");
const helmet = require("helmet");
const router = express.Router();

const app = express();

/*
 */
app.use(methodOverride());

app.use(cors());

// app.use(passport.initialize());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

module.exports = {
  app,
  router,
};
