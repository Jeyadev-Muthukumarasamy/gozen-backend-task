const express = require("express");
const router = express.Router();
const {getRoute,getById,post,putById,deleteById} = require("../Controller/userController")
router.get("/product/get",getRoute)
router.get("/product/get/:id",getById)
router.post("/product/post",post)
router.put("/product/put/:id",putById)
router.delete("/product/delete/:id",deleteById)



module.exports = {router}