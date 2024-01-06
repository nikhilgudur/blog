const express = require("express");
const cors = require("cors");
const passport = require("passport");
const methodOverride = require("method-override");
const helmet = require("helmet");

const app = express();

/*
 */
app.use(methodOverride());

app.use(cors());

app.use(passport.initialize());

app.use(helmet());

module.exports = app;
