// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require('mongoose');

// this schema is for the user
const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required : true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: String,
    phone: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    photo: String,
    bio: String,
    birthdate: {
        type: Date,
        required: true
    },
    deactivated: {
        type: Boolean,
        default: false
    }
});

// here we are exporting the model
module.exports = mongoose.model('user', Schema)