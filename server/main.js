const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const usersRouter = require("./routes/users")
const dbConnection = require("./db/db")
const verifyToken = require("./utills/tokenValidation")
const verifyRouter = require("./routes/verify")
const productsRouter = require("./routes/products")
// const { seed } = require("./utills/products")

require("dotenv").config()

const { PORT } = process.env
const port = 4000 || PORT

app.listen(port, () => console.log(`now listening to port${port}`))

app.use(cors())
app.use(bodyParser.json())
dbConnection()

app.use("/users", usersRouter)
app.use("/verify", verifyRouter)
// app.use(verifyToken)
app.use("/products", productsRouter)
