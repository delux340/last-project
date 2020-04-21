require("dotenv").config()

function verifyToken(req, res, next) {
    const { SECRET } = process.env
    const { autorization } = req.headers
    console.log(autorization)
    if (!autorization) res.json({ message: "token not found" })

    jwt.verify(autorization, SECRET, (err, decoded) => {
        if (err) res.json({ message: "token is not valid" })
        console.log(decoded)
        const { id } = decoded
        req.headers.user = { id }
        next()
    })
}





module.exports = verifyToken