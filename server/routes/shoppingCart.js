const router = require("express").Router()
const getCart = require("../controllers/shoppingCart")

router.get("/", getCart)




module.exports = router