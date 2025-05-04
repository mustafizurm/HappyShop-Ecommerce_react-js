const Product = require("../model/product.model")

// create product
exports.createProduct = async (req, res, next) => {
    try {
        const { productName, brandName, category, images, price, sellingPrice, description, currentUser } = req.body;
        const newProduct = {
            productName, brandName, category, images, price, sellingPrice, description, currentUser
        }
        const product = await Product.create(newProduct)
        const _product = await product.save()

        if(!_product){
            return res.status(402).json({
                success: false,
                message: "product not create successfully"
            })
        } else{
            return res.status(200).json({
                success: true,
                message: "Product create successfully",
                data: _product
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Problem"
        })
    }
}


// all products found and filter with query
exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        if(!products){
            return res.status(404).json({
                success: false,
                message: "internal problem"
            })
        } else{
            if(products.length === 0){
                return res.status(401).json({
                    success: false,
                    message: "Products not found"
                })
            } else{
                return res.status(200).json({
                    success: true,
                    message: "Products found successfully",
                    data: products
                })
            }
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server problem"
        })
    }
}


// get categoryWise products
exports.getCategoryWiseProduct = async (req, res, next) => {
    try {
        const {category} = req.body;
        const products = await Product.find({category: category})
        if(!products){
            return res.status(404).json({
                success: false,
                message: "internal problem"
            })
        } else{
            if(products.length === 0){
                return res.status(401).json({
                    success: false,
                    message: "product not found"
                })
            } else{
                return res.status(200).json({
                    success: true,
                    message: "Product found successfully",
                    data: products
                })
            }
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server Problem"
        })
    }
}


// getCategory

exports.getCategory = async (req, res, next) => {
    try {
        const allCategoryName = await Product.distinct("category")
        const categoryList = [];
        for (const categoryName of allCategoryName) {
         const category = await Product.findOne({category: categoryName})
          categoryList.push(category)
        }
        
        return res.status(200).json({
            success: true,
            message: "all Category Product",
            data: categoryList
        })
    } catch (error) {
        
    }
}


exports.productImageUpload = async (req, res, next) => {
    const fileName = req.file.filename
    // const imageUrl = `${req.protocol}://${req.get('host')}/${req.destination}/${fileName}`;
    const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.destination}/${fileName}`;
    console.log(req.file) 
    res.status(200).json({
        data: imageUrl
    })
}