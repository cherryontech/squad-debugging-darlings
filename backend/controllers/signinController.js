const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || 'xxx';

const mongoose = require('mongoose');
const User = require("../models/User");

//signin
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    //Jinju will provide confidential
    const uri = "";
    await mongoose.connect(process.env.MONGO_URI || uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const user = await User.findOne({ email: email });
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ userId: user.userId }, secretKey);
            res.status(200).json({ message: "Login successful", token: token });
        } else {
            res.status(400).json({ message: "Invalid password" });
        }
    } else {
        res.status(404).json({ message: "Email does not exist" });
    }
});

module.exports = router;
