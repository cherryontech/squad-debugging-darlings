const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    email: String,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        enum: ['Mentor', 'Mentee'],
        // default: 'Mentee'
    },
    title: {
        type: String,
        enum: ['Product Manager', 'Designer', 'Developer'],
    },
    pronouns: {
        type: String,
        enum: ['She/Her', 'He/Him', 'They/Them', 'Xe/Xem', 'Ze/Zir'],
    },
    calendly: {
        type: String,
    },
    industry: {
        type: [String],
        default: [],
    },
    mentorship: {
        type: [String],
        default: [],
    },
    password: String,
});

let userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
