// dotenv file added
const dotenv = require("dotenv")
dotenv.config({path: './config/env'})

const app = require("./app");
const connectDataBase = require("./config/ConnectDataBase");

const PORT = process.env.PORT || 4000

// connect Database
connectDataBase()

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})