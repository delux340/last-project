const router = require("express").Router()
const verifyToken = require("../controllers/verify")

router.get("/", verifyToken)

module.exports = router