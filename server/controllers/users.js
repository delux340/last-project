const usersModel = require("../schemas/users")

async function register(req, res) {
    const user = req.body
    try {
        await usersModel.handleUserRegister(user)
        res.json({ message: "user registerd successfully", registerRedirect: true })
    } catch (err) {
        console.log(err.message)
        res.json({ message: "user already exists", registerRedirect: false })
    }
}

async function registerVerify(req, res) {
    const user = req.body
    try {
        const ifExists = await usersModel.handleVerify(user)
        res.json(ifExists)
    } catch (err) {
        res.json(false)
    }
}
async function login(req, res) {
    const user = req.body
    try {
        const token = await usersModel.handleUserLogin(user)
        res.json({ token, message: "logged in successfully" })
    } catch (err) {
        res.json({ token: "", message: "use does not exists" })
    }
}

module.exports = {
    register,
    login,
    registerVerify
}