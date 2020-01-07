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
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    followed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('following', Schema)