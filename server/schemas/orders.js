const mongoose = require("mongoose")



const ordersSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shoppingCart",
    },
    totalSum: {
        type: Number,
        required: true
    },
    shipmentCity: {
        type: String,
        required: true
    },
    shipmentStreet: {
        type: String,
        required: true
    },
    shipmentDate: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    lastCreditCardDigits: {
        type: Number,
        required: true
    }
})
const ordersModel = mongoose.model("orders", ordersSchema)

module.exports = ordersModel