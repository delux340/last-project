const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const getToken = require("../utills/getToken")

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "customer"
    }
})


userSchema.statics.handleUserRegister = async function (user) {
    const { email } = user
    const existingUser = await ifExists(email)
    if (!existingUser.length) {
        await registerSuccess(user)
    } else {
        registerFailed()
    }
}

userSchema.statics.handleVerify = async function (user) {
    const { email, id } = user
    const ifExists = await verifyUser(email, id)
    if (!ifExists.length) {
        return false
    } else {
        return true
    }
}

userSchema.statics.handleUserLogin = async function (user) {
    const { email, password } = user
    const [existingUser] = await ifExists(email)
    if (!existingUser) return loginFailed()
    const { password: exPassword, _id } = existingUser
    return comparePasswords(password, exPassword, email, _id)
}




async function verifyUser(email, id) {
    const user = await usersModel.find({ $or: [{ id }, { email }] })
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

async function ifExists(email) {
    const user = await usersModel.find({ email })
    return user
}

function loginSuccess(email, id) {
    const token = getToken(email, id)
    return token
}
async function loginFailed() {
    throw new Error()
}
async function comparePasswords(password, exPassword, email, id) {
    const verifyPassword = bcrypt.compare(password, exPassword)
    if (verifyPassword) {
        const token = loginSuccess(email, id)
        return token
    } else {
        loginFailed()
    }
}
const usersModel = mongoose.model("users", userSchema)

module.exports = usersModel





