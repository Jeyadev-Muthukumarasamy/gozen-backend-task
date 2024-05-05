const express =  require("express");
const router = express.Router();
const {signUp,login} = require("../Controller/Controller")
router.post("/post",signUp)
router.post("/login",login)
module.exports = router