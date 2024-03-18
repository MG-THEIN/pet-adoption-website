const dotenv = require("dotenv")
const port = 3000
const express = require("express")
const connectDB = require("./config/dbConn")
const cors = require("cors")

//to use .env variables
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

// Database connection with MongoDB
connectDB()

//API Creation

app.use("/", require("./routes/userRoutes.js"))

app.listen(port, (error) => {
  if (!error) {
    console.log(`server running on port ${port}`)
  } else {
    console.log("Error : " + error)
  }
})
