require("dotenv").config()
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const { SECRET } = process.env
    const { autorization } = req.headers
    if (!autorization) res.json({ isError: true, message: "token not found" })

    jwt.verify(autorization, SECRET, (err, decoded) => {
        if (err) res.json({ isError: true, message: "token is not valid" })
        const { id, email } = decoded
        req.headers.user = { id, email }
        next()
    })

}





module.exports = verifyToken