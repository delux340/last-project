const usersModel = require("../schemas/users")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const getToken = require("../utills/jwt")


async function handleUserRegister(user) {
    const { email } = user
    const existingUser = await ifExists(email)
    if (!existingUser.length) {
        await registerSuccess(user)
    } else {
        registerFailed()
    }
}

async function handleUserLogin(user) {
    const { email, password, id } = user
    console.log(id)
    const existingUser = await ifExists(email)
    if (!existingUser.length) return loginFailed()
    const { password: exPassword } = existingUser
    return comparePasswords(password, exPassword, email, id)
}

async function handleVerify(user) {
    const { email, id } = user
    const ifExists = await verifyUser(email, id)
    if (!ifExists.length) {
        return false
    } else {
        return true
    }
}






async function verifyUser(email, id) {
    const user = await usersModel.find({ $or: [{ id }, { email }] })
    return user
}
async function ifExists(email) {
    const user = await usersModel.find({ email })
    return user
}
async function registerSuccess(user) {
    const { password } = user
    const encryptedPassword = bcrypt.hashSync(password, salt)
    try {
        const newUser = new usersModel({ ...user, password: encryptedPassword })
        const result = await newUser.save()
        return result
    } catch (err) {
        return registerFailed()
    }
}
function registerFailed() {
    throw new Error("user already exists")
}
async function comparePasswords(password, exPassword, email, id) {
    const ifUserExists = bcrypt.compare(password, exPassword)
    if (ifUserExists) {
        const token = loginSuccess(email, id)
        return token
    } else {
        loginFailed()
    }
}


function loginSuccess(email, id) {
    const token = getToken(email, id)
    return token
}
async function loginFailed() {
    throw new Error()
}







module.exports = {
    handleUserRegister,
    handleUserLogin,
    handleVerify
}