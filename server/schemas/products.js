const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
productSchema.statics.getProducts = function () {
    return this.find({});
}



const productsModel = mongoose.model("products", productSchema)



module.exports = productsModel 

