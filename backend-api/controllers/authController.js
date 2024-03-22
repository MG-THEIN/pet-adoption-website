const User = require("../models/User.js")
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
  const { username, email, password } = req.body

  // confirm data
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." })
  }

  // Check Duplicate
  const duplicate = await User.findOne({ username }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: "Username not available" })
  }

  // hash password
  const hashedPwd = await bcrypt.hash(password, 10)

  const userObject = { username, email, password: hashedPwd }

  // create and save user
  const user = await User.create(userObject)

  if (user) {
    return res.status(201).json({ message: `New user ${username} created` })
  } else {
    return res.status(400).json({ message: "Invalid user data received" })
  }
}

module.exports = { signUp }
