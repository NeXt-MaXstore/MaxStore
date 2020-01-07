const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true });

let db = mongoose.connection

db.on('error', function () {
    console.log('mongoose connection error');
});

db.once('open', function () {
    console.log('mongoose connected successfully');
});

const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: String,
    lastName: {
        type: String,
        required: true
    },
    gender: String,
    mobilenumber: {
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
    description: String,
    birthdate: {
        type: Date,
        required: true
    },
    deactivated: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('user', Schema)