const mongoose = require("mongoose")

const connectDataBase = async () => {
    mongoose.connect(process.env.DB_URL)
    .then((data)=> {
        console.log(`Database is connected with ${data.connection.host}`)
    })
    .catch((error)=> {
        console.log(`Database is not connect`)
    })
}

module.exports = connectDataBase