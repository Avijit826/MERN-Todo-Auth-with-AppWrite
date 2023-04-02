const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    //validate
    if (!(email && password)) {
      res.status(401).send("email and password is required")
    }
    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).send("User not exists")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      res.status(401).json("Data Not Match")
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    })
    user.password = undefined
    user.token = token
    res.status(201).json({token})
  } catch (error) {
    console.error(`ERROR>>>...................\n${error}`)
  }
}
const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!(name && email && password)) {
      res.status(401).send("All fields are required")
    }
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      res.status(401).send("User already exists")
    }
    const bcryptPass = await bcrypt.hash(password, 10)
    const newUser = await User.create({ name, email, password: bcryptPass })
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    })
    newUser.token = token
    newUser.password = undefined
    res.status(200).json({token})
  } catch (err) {
    //TODO: Handle error efficiently
    console.error(`ERROR>>>...................\n${err}`)
  }
}

module.exports = { userLogin, userSignup }
