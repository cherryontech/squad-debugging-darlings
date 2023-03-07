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
    bio: String,
    password: String,
});

let userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
