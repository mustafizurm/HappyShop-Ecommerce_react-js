const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
        required: true
    },
    currentUser: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "User"
    }
})

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;