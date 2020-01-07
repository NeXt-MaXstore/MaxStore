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
    name: String
});

module.exports = mongoose.model('category', Schema)