const mongoose = require("mongoosse");
const bcrypt = require("bcrypt");

const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name."],
  },
  email: {
    type: String,
    required: [true, "Please enter an email."],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: 8,
    select: false,
  },
  passwordConfrim: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
    validate: {
      validator: function (value) {
        return this.password === value;
      },
      message: "Passwords do not match.",
    },
  },

  isVarified: {
    type: Boolean,
    default: false,
    select: false,
  },
  otp: {
    type: Number,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },

  timestamps: true,
});
module.exports = mongoose.model("User", UserSchema);
