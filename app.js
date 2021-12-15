const express = require("express");
const logger = require("morgan");
require("dotenv").config();
require("./src/db/db");

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
