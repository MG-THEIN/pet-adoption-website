const User = require("../models/User.js")
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
  const {
    first_name,
    last_name,
    country_of_residence,
    zipcode,
    email,
    password,
  } = req.body

  // confirm data
  if (
    !first_name ||
    !last_name ||
    !country_of_residence ||
    !zipcode ||
    !email ||
    !password
  ) {
    return res.status(400).json({ message: "All fields are required." })
  }

  // Check Duplicate
  const duplicate = await User.findOne({ email }).lean().exec()

  if (duplicate) {
    return res
      .status(409)
      .json({
        message: "An existing account found with this email. Please login.",
      })
  }

  // hash password
  const hashedPwd = await bcrypt.hash(password, 10)

  const userObject = {
    first_name,
    last_name,
    country_of_residence,
    zipcode,
    email,
    password: hashedPwd,
  }

  // create and save user
  const user = await User.create(userObject)

  if (user) {
    return res.status(201).json({ message: `New user ${email} created` })
  } else {
    return res.status(400).json({ message: "Invalid user data received" })
  }
}

module.exports = { signUp }
