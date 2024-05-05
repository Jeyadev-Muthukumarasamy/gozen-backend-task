const express = require("express");
const { getProduct,getProductById, postProduct, putProductById, deleteProductById } = require("../Controller/productController");
const router = express.Router();

router.get("/api/getProduct",getProduct)
router.get("/api/getProduct/:id",getProductById)
router.post("/api/postProduct",postProduct)
router.put("/api/putProduct/:id",putProductById)
router.delete("/api/deleteProduct/:id",deleteProductById)


module.exports = router