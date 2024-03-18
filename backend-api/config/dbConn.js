// This module is for connection to MongoDB

const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    console.log("Successfully connected to mongoDB")
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
