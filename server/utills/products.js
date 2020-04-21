const products = require("../products.json")
const ProductModel = require("../schemas/products")

async function seed() {
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const newProduct = new ProductModel(product)
        await newProduct.save()
    }
}
module.exports = { seed }