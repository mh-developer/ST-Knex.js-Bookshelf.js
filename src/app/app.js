const express = require("express");
const logger = require("morgan");

const usersRouter = require("./users/users.route");
const locationsRouter = require("./locations/locations.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

module.exports = app;
