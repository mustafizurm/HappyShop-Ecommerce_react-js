const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const multer = require("multer")
const { productImageUpload } = require("./controller/product.controller");
const path = require('path');

app.use(cookieParser())
app.use(express.json())
app.use(
    cors({
        origin:["http://localhost:5173", "http://localhost:5174"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post("/api/upload_productImage", upload.single('file'), productImageUpload)

// custom file require
const userRoute = require("./route/user.route")
const productRoute = require("./route/product.route");

// user route
app.use("/api", userRoute)

// product route
app.use("/api", productRoute)



module.exports = app;