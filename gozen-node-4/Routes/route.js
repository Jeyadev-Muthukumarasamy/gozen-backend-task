const express = require("express");
const route = express.Router();
const logger = require("../Middleware/logger");
const { getHandler } = require("../Controller/Controller");

route.use(logger);

route.get("/", getHandler);

module.exports = route;
