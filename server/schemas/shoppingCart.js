const mongoose = require("mongoose")

const shoppingCartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    date: {
        type: String,
        required: true
    }
})
const shoppingCartModel = mongoose.model("shoppingCart", shoppingCartSchema)

module.exports = shoppingCartModel
