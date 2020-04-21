const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "customer"
    }
})

const usersModel = mongoose.model("users", userSchema)

module.exports = usersModel