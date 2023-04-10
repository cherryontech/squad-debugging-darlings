const express = require('express');
const router = express.Router();
const axios = require('axios');


const mongoose = require('mongoose');

const auth = require('../auth');
const User = require("../models/User");

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

// Matching algorithm
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

        const role = response.data.role.toLowerCase();
        const title = response.data.title.toLowerCase();
        const industry = response.data.industry.toLowerCase();
        const mentorship = response.data.mentorship.toLowerCase();

        const matchingRole = role === 'mentee' ? 'mentor' : role === 'mentor' ? 'mentee' : null;

        if (matchingRole) {
            await mongoose.connect(process.env.MONGO_URI || uri,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const users = await User.find({ role: matchingRole, title: title });
            const matchingUsers = [];

            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                const userIndustry = user.industry;
                const userMentorship = user.mentorship;

                // Count number of common industries
                let commonIndustries = 0;
                for (let j = 0; j < userIndustry.length; j++) {
                    if (industry.includes(userIndustry[j])) {
                        commonIndustries++;
                    }
                }

                // Count number of common mentorships
                let commonMentorships = 0;
                for (let j = 0; j < userMentorship.length; j++) {
                    if (mentorship.includes(userMentorship[j])) {
                        commonMentorships++;
                    }
                }

                // Matching criteria: industries 3/5, mentorship 2/3
                if (commonIndustries >= 3  && commonMentorships >= 2) {
                    matchingUsers.push(user);
                }
            }

            return res.json(matchingUsers);
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
