const mongoose = require("mongoose")
const dbConnection = async () => {

    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`,
            { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true })
        console.log("db connected")
        } catch (ex) {
        console.log(ex.message)
        process.exit(1)
    }
}

module.exports = dbConnection;