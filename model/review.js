// here we are requiring the mongoose and saving into a constant called mongoose
const mongoose = require('mongoose');

// this schema is for the review
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
    },
    deactivated: {
        type: Boolean,
        default: false
    }
});

// here we are exporting the model
module.exports = mongoose.model('review', Schema)