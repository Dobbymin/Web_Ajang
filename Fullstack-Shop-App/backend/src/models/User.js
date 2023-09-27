const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 5,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
});

const User = mongoose.module('User', userSchema);

module.exports = User;
