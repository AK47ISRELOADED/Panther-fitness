const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/user");

dotenv.config();

const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// db connect

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connection connected");
});

app.use("api/v1/user", userRoute);

app.use(express.json({ limit: "3mb" }));

app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});
