const express = require("express");

const signupRoutes = require("./user");
const productRouter = require("./product");

const router = express.Router();

router.use('/user', signupRoutes);

router.use('/user', productRouter);

module.exports = router