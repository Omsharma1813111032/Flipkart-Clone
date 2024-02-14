const express = require("express")
const Product = express.Router()
const ProductController = require("../controller/productController")

Product.get("/products",ProductController.products)

module.exports = Product