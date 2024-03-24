const dotenv = require("dotenv")
const port = 3000
const express = require("express")
const connectDB = require("./config/dbConn")
const cors = require("cors")
const serverErrorHandler = require("./middleware/serverErrorHandler.js")

//to use .env variables
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// Database connection with MongoDB
connectDB()

//API Creation

app.use("/auth", require("./routes/authRoutes.js"))
app.use("/users", require("./routes/userRoutes.js"))

app.use(serverErrorHandler)

app.listen(port, (error) => {
  if (!error) {
    console.log(`server running on port ${port}`)
  } else {
    console.log("Error : " + error)
  }
})
