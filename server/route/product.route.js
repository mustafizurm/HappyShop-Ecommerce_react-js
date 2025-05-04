const express = require("express");
const { createProduct, getAllProducts, getCategoryWiseProduct, getCategory } = require("../controller/product.controller");
const Router = express.Router();

Router.post("/admin/upload_product", createProduct)
Router.get("/get_products", getAllProducts)
Router.post("/category_wiseProducts", getCategoryWiseProduct)
Router.get("/get_category", getCategory)


module.exports = Router