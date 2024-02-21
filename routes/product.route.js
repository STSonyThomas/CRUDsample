const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProduct,getProducts,postProduct,updateProduct,deleteProduct} = require("../controllers/product.controller.js");

//general get for displaying all products;
router.get("/",getProducts);

//specific get request based on ID;
router.get("/:id",getProduct);

//post a new item;
router.post("/",postProduct);

//update an item based on ID;
router.put("./:id",updateProduct);

//delete an item based on ID;
router.delete("./:id",deleteProduct);

module.exports=router;