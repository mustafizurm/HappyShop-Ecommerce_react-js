const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cookieParser())
app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);


// custom file require
const userRoute = require("./route/user.route")

// user route
app.use("/api", userRoute)

module.exports = app;