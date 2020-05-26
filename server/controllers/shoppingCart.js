const shoppingCartModel = require("../schemas/shoppingCart")
const cartItemModel = require("../schemas/cartItem")

async function getCart(req, res) {
    const { id } = req.headers.user
    const cartArray = await shoppingCartModel.getCart(id)
    if (!cartArray.length) await makeCart(id)
    const isActive = cartArray.find((cart) => cart.status)
    if (isActive) {
        const { _id } = isActive
        const cartItems = await cartItemModel.getCartItems(_id)
        // console.log({ cartItems })
        res.json({ products: cartItems, cartId: _id }) 
    }
    await makeCart(id)
}

async function makeCart(id) {
    const cartId = await shoppingCartModel.saveCart(id)
    res.json({ products: [], cartId })
}

module.exports = getCart