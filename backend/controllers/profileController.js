const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const auth = require('../auth');
const User = require("../models/User");

router.patch('/userProfile/:userId', auth, async (req, res) => {
    //Jinju will provide confidential
    const uri = "";
    await mongoose.connect(process.env.MONGO_URI || uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        const userId = req.params.userId;
        const { firstName, lastName, role, bio } = req.body;

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
        if (bio) {
            user.bio = bio;
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
