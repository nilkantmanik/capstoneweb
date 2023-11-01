const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter valid name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter  email"],
    validate: [validator.isEmail, "Please Enter valid email"],
    unique:true,
  },
  password: {
    type: String,
    required: [true, "Please Enter password"],
    minLength: [5, "Please Enter valid password"],
  },
  patients: [
    {
      name: {
        type: String,
        required: [true, "Please Enter valid name for patient"],
      },
      email: {
        type: String,
        required: [true, "Please Enter email for patient"],
        validate: [validator.isEmail, "Please Enter valid email for patient"],
        unique:true,
      },
      prediction: {
        type: String,
        default:"Not yet checked"
        // required: [true, "Please Enter prediction for patient"],
      },
    },
  ],
});



module.exports = mongoose.model("User", userSchema);
