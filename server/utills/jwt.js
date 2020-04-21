const jwt = require("jsonwebtoken")

function getToken(email,id) {
    const { SECRET } = process.env
    const token = jwt.sign(
        { email,id }, SECRET, { expiresIn: "1h" })
    return token
}







module.exports = getToken

