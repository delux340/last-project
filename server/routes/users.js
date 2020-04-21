const router = require("express").Router()
const { register, login, registerVerify } = require("../controllers/users")

router.post("/register", register)
router.post("/register/verify", registerVerify)
router.post("/login", login)





module.exports = router