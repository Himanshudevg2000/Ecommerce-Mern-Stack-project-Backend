const express = require("express");
const router = express.Router();
const productController = require('../controller/product');
const validator = require('express-joi-validation').createValidator();

const {product} = require('../validation/product');

router.post('/add-product', validator.body(product) ,productController.addProduct);

router.get('/get-product',productController.getProducts);

router.get("/get-productbyid", productController.getProductByUserId);

router.get("/get-productby-id/:id", productController.getProductById);

router.delete("/delete-product", productController.deleteProduct);

router.put("/update-product", productController.updateProduct);

router.get("/search/:key", productController.searchField);

module.exports = router;