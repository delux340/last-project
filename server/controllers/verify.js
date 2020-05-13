const handleToken = require("../utills/verifyToken")

async function verifyToken(req, res) {
    const { autorization } = req.query
    try {
        const result = await handleToken(autorization)
        res.json({ status: result })
    }
    catch (err) {
        res.json({ status: false })
    }
}


module.exports = verifyToken