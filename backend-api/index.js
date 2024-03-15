const port = 4000
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors")

app.use(express.json)
app.use(cors())

// Database connection with MongoDB
// added paws-data at the end to store the data at that folder
mongoose.connect(
  "mongodb+srv://pawscupid:345234GGh@cluster0.ukrfhdo.mongodb.net/paws-data"
)

//API Creation

app.get("/", (req, res) => {
  res.send("Express app is running.")
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port)
  } else {
    console.log("Error : " + error)
  }
})
