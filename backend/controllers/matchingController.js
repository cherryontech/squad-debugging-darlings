const express = require('express');
const router = express.Router();
const axios = require('axios');


const mongoose = require('mongoose');

const auth = require('../auth');
const User = require("../models/User");

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

// 1. Matching by role and title
router.get('/lists', auth, async (req, res) => {
    const userId = req.user.userId;
    const userProfileUrl = `${baseURL}/users/userProfile/${userId}`;

    // Use Axios to call the get user API to get the user's role
    try {
        const response = await axios.get(userProfileUrl, {
            headers: {
                Authorization: req.headers.authorization
            }
        });

        const role = response.data.role;
        const title = response.data.title;

        const matchingRole = role === 'Mentee' ? 'Mentor' : role === 'Mentor' ? 'Mentee' : null;

        if (matchingRole) {
            await mongoose.connect(process.env.MONGO_URI || uri,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const users = await User.find({ role: matchingRole, title: title });
            return res.json(users);
        } else {
            // If user does not have role yet
            return res.status(403).json({
                message: "Invalid role"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

module.exports = router;
