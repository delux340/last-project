const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productPicture: {
        type: String,
        required: true
    },
    totalSum: {
        type: Number,
        required: true
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shoppingCart",
    }
})
const cartItemModel = mongoose.model("cartItem", cartItemSchema)

module.exports = cartItemModel