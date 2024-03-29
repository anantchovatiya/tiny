const mongoose = require("mongoose");

const DB_URL = 'mongodb+srv://anantchovatiya:Uf1bZiZGko7ZJ22s@cluster0.rkkycsk.mongodb.net/';

const connect = () => {
    return mongoose.connect(DB_URL);
};

module.exports = connect;
