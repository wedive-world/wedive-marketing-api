const mongoose = require('mongoose');

// Connect to mongoDB
module.exports.connectDB = (() => {

    const isPrd = process.env.NODE_ENV == 'production'
    const DB_HOST = isPrd
        ? 'mongodb://10.0.16.53:27017/marketing'
        : 'mongodb://192.168.0.23:4100/marketing'

    console.log(`trying to connect ${DB_HOST}...`)

    const db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        // CONNECTED TO MONGODB SERVER
        console.log(`Connected to mongod server, path=${DB_HOST}`);
    });

    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        directConnection: true
    })
})

module.exports.schema = {
    Url: require('./schema/url'),
    UrlRecord: require('./schema/url-record'),
    PhoneNumber: require('./schema/phone-number'),
}