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
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    deactivated: {
        type: Boolean,
        default: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

module.exports = mongoose.model('item', Schema)