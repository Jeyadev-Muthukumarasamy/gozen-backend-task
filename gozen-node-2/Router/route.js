const express = require("express");
const router = express.Router();
const controller = require("../Controller/Controller");

router.get("/get", controller.getFile);
router.post("/Post", controller.postRequest);

module.exports = { router };
