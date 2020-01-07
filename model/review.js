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
    content: {
        type: String,
        max: 250
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }
});

module.exports = mongoose.model('review', Schema)