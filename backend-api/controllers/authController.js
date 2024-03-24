const errorHandler = require("../middleware/errorHandler.js")
const User = require("../models/User.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// signup page & creating new users
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
    return res.status(409).json({
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

const signIn = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter email and password to sign in." })
  }

  const foundUser = await User.findOne({ email }).lean().exec()

  if (!foundUser) {
    return res.status(401).json({ message: "Incorrect username or password1." })
  }

  const match = await bcrypt.compare(password, foundUser.password)

  if (!match) {
    return res.status(401).json({ message: "Incorrect username or password2." })
  }

  const accessToken = jwt.sign(
    {
      userInfo: {
        first_name: foundUser.first_name,
        last_name: foundUser.last_name,
        country_of_residence: foundUser.country_of_residence,
        zipcode: foundUser.zipcode,
        email: foundUser.email,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  )

  const refreshToken = jwt.sign(
    { email: foundUser.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "30d" }
  )

  //create secure cookie with refresh token
  res
    .cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", //cross site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, //expiry date
    })
    .json(accessToken) // send access token with userInfo
}

module.exports = { signUp, signIn }
