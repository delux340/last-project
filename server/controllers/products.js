const ProductsModel = require("../schemas/products")

exports.getAllProducts = async (req, res, next) => {
    const products = await ProductsModel.getProducts().exec();
    res.status(200).json(products)
}


