const mongoose = require("mongoose");
const validator = require("validator");


const registerSchema = new mongoose.Schema({
  associated: {
    type: String,
    required: [true, "Please Enter your associated"],
  },
  category: { 
    type: String,
    required: [true, "Please Select your category"],
  },
  papertitle: { 
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  affiliation: {
    type: String,
    required: [true, "Please Select your affiliation"],
  },
  categorytype: {
    type: String,
    required: [true, "Please Select your categorytype"],
  },
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  mobile: {
    type: Number,
    required: [true, "Please Enter your number"],
    minLength: [10, "Please Enter a valid number"],
    maxLength: [10, "Please Enter a valid number"],
  },
  service: {
    type: String,
    required: [true, "Please Enter your service"],
  },
  IEEEmembers: {
    type: String,
    required: [true, "Please Enter your IEEEmembers"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Register", registerSchema);
