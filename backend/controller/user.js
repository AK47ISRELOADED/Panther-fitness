const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../model/User");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const registerController = async (req, res, next) => {
  try {
    const existinguser = await user.findOne({ email: req.body.email });
    if (existinguser) {
      return res
        .status(400)
        .send({ message: "user already exists", status: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const confirmpassword = await bcrypt.hash(req.body.passwordConfrim, salt);

    const otp = otpGenerator.generate(6, {
      digits: true,
      upperCase: false,
      specialChars: false,
      upperCaseAlphabates: false,
      lowerCaseAlphabates: false,
    });

    req.body.passwordconfirm = confirmpassword;
    if (req.body.passwordconfirm === req.body.password) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        otp: otp,
      });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "adarshkaurav2003@gmail.com",
          pass: "sttuuybrnzkkloea",
        },
      });

      const mailOptions = {
        from: "panther fitness ",
        to: req.body.email,
        subject: "OTP Verification",
        text: `Your OTP is ${otp}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .send({ message: "Internal Server Error", status: false });
        }
        res.send({ message: "otp sent successfully", status: true });
      });
      return res.status(201).send({
        message: "register successfully",
        data: {
          user: newUser,
          token,
        },
        success: true,
      });
    } else {
      return res.status(201).send({
        message: "password not match",

        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "register error",

      success: false,
    });
  }
};

module.exports = { registerController };
