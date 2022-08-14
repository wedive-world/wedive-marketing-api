const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({

    key: { type: Number, index: true, default: 0 },
    publishedAt: Schema.Types.String,
    description: Schema.Types.String,
    imageUrl: Schema.Types.String,

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Url', schema);