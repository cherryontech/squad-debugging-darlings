const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: String,
    email: String,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        enum: ['mentor', 'mentee'],
    },
    title: {
        type: String,
        enum: ['product manager', 'designer', 'developer'],
    },
    pronouns: {
        type: String,
        enum: ['she/her', 'he/him', 'they/them', 'xe/xem', 'ze/zir'],
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
