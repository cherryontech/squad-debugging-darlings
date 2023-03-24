const { v4: uuidv4 } = require("uuid");
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");


const regexEnum = require("../constants/regexEnum");

const mongoose = require('mongoose');
const User = require("../models/User");

//signup
router.post("/signup", async (req, res) => {
    const { email, password, password_confirm } = req.body;
    function isEmail(email) {
        return regexEnum.EMAIL.test(email);
    }
    let isValidEmail = isEmail(email);
    // validate the data here the email should be an actual email, password should be crypted
    if (isValidEmail && password === password_confirm) {
        if (
            password.length >= 8 &&
            password.match(regexEnum.UPPER_CASE) &&
            password.match(regexEnum.NUMBER) &&
            !password.match(regexEnum.SPECIAL_CHAR)
        ) {
            try {
                const userExisted = await User.findOne({ email: email });
                if (userExisted) {
                    // email already exists, return an error
                    return res.status(400).json({ message: 'Email already exists' });
                } else {
                    //Jinju will provide confidential
                    const uri = "";
                    await mongoose.connect(process.env.MONGO_URI || uri, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    });
                    const cryptedPassword = await bcrypt.hash(password, 10);
                    const userId = uuidv4();
                    const userInstance = new User({
                        "userId": userId,
                        "email": email,
                        "password": cryptedPassword,
                    });

                    await userInstance.save();
                    res.status(201).json({ message: "User created successfully" });
                }
            } catch (error) {
                console.log(`error occurred ${error}`);
            }
        } else if (password.length < 8) {
            res.status(400).json({
                message: "Password should be 8 characters or more",
            });
        } else if (!password.match(regexEnum.UPPER_CASE)) {
            res.status(400).json({
                message: "Password should have at least one upper",
            });
        } else if (!password.match(regexEnum.NUMBER)) {
            res.status(400).json({
                message: "Password should have at least one number",
            });
        } else if (password.match(regexEnum.SPECIAL_CHAR)) {
            res.status(400).json({
                message: "Password should not have any symbol",
            });
        }
    } else if (!isValidEmail) {
        res.status(400).json({
            message: "Wrong email format",
        });
    } else {
        res.status(400).json({
            message: "Password doesn't match",
        });
    }
});

module.exports = router;
