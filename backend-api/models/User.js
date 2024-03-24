const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
      unique: true,
    },
    last_name: {
      type: String,
      require: true,
      unique: true,
    },
    country_of_residence: {
      type: String,
      require: true,
      unique: true,
    },
    zipcode: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)
