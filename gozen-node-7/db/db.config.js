const mongoose = require("mongoose");

const connectDb = async() => {
    try {
        const {connection} = await mongoose.connect('mongodb://localhost:27017/gozen-node')
        console.log(connection.host)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb