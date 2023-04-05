const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const auth = require('../auth');
const User = require("../models/User");

// Get user data
router.get('/userProfile/:userId', auth, async (req, res) => {
    //Jinju will provide confidential
    const uri = "";
    await mongoose.connect(process.env.MONGO_URI || uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        const userId = req.params.userId;

        // Check if user has permission to access this profile
        if (req.user.userId !== userId) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // Find user information in database
        const user = await User.findOne({ userId: userId });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            title: user.title,
            pronouns: user.pronouns,
            industry: user.industry,
            mentorship: user.mentorship,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

// Update user data
router.patch('/userProfile/:userId', auth, async (req, res) => {
    //Jinju will provide confidential
    const uri = "";
    await mongoose.connect(process.env.MONGO_URI || uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        const userId = req.params.userId;
        const { firstName, lastName, role, title, pronouns, calendly, industry, mentorship } = req.body;
        console.log(req.body);
        // Check if user has permission to update this profile
        if (req.user.userId !== userId) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // Update user information in database
        const user = await User.findOne({ userId: userId });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        if (firstName) {
            user.firstName = firstName;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        if (role) {
            user.role = role;
        }
        if (title) {
            user.title = title;
        }
        if (pronouns) {
            user.pronouns = pronouns;
        }
        if (calendly) {
            user.calendly = calendly;
        }
        if (industry) {
            user.industry = JSON.parse(industry);
        }
        if (mentorship) {
            user.mentorship = JSON.parse(mentorship);
        }

        await user.save();

        res.json({
            message: 'User information updated successfully'
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

module.exports = router;
