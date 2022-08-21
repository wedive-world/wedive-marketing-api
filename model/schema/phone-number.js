const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({

    phoneNumber: String,
    reason: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PhoneNumber', schema);