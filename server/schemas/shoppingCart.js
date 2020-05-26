const mongoose = require("mongoose")

const shoppingCartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    date: {
        type: String,
        default: new Date()
    },
    status: {
        type: Boolean,
        default: true
    }
})

shoppingCartSchema.statics.getCart = async function (userId) {
    return this.find({ userId });
}

shoppingCartSchema.statics.saveCart = async function (userId) {
    const newCart = new shoppingCartModel({ userId })
    const result = await newCart.save();
    const { _id } = result
    return _id
}
const shoppingCartModel = mongoose.model("shoppingCart", shoppingCartSchema)

module.exports = shoppingCartModel
