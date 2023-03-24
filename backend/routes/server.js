const { v4: uuidv4 } = require("uuid");
const express = require("express");
const cors = require('cors');
const app = express();

const bcrypt = require("bcryptjs");

//Connect with MongoDB
const mongoose = require('mongoose');
const usersRouter = require('./users');


//for authentication token
require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || 'xxx';

const auth = require("../auth");

const fs = require("fs");
const port = 3000;
const path = require("path");
const regexEnum = require("../constants/regexEnum");
app.use(express.urlencoded({ extended: "false" }));
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

const userDB = path.resolve("../database/user.json");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/auth/welcome", auth, (req,res) => {
  res.status(200).json({ message: `Congrats! You're authenticated. ${req.user.userEmail}` });
});

//Jinju will provide confidential
const uri = "";

mongoose.connect(process.env.MONGO_URI || uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log('MongoDB connection error', err)
});

app.listen(port, () => {
  console.log(
    `welcome to Mentor-Mentee matching platform running on port: ${port}`
  );
});
