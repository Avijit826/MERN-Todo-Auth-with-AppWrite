require("dotenv").config()
const cors = require("cors")
require("./config/database").connect()
const express = require("express")
const app = express()
const todoRoute = require('./routes/todo.route')
const userRoute = require('./routes/user.route')

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

app.use("/api/v1/todo", todoRoute)
app.use("/api/v1", userRoute)

app.get("/", (req, res) => {
    res.send("Homepage")
})


module.exports = app