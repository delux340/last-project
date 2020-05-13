const jwt = require("jsonwebtoken")

async function handleToken(autorization) {
    const { SECRET } = process.env
    if (!autorization) handleError()
    return jwt.verify(autorization, SECRET, (err, decoded) => {
        if (err) handleError()
        return true
    })

}
function handleError() {
    throw new Error("invalid token")
}

module.exports = handleToken