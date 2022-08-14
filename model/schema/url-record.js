const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({

    key: { type: Number, index: true, default: 0 },
    os: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UrlRecord', schema);