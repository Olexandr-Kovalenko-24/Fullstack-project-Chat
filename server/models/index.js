const mongoose = require('mongoose');
const db = process.env.ENV_NODE || "development";
const CONFIG = require('../config/db.json')[db];
const User = require('./User');
const Message = require('./Message');
const Chat = require('./Chat');

mongoose.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
.catch(error => {
    console.log(error);
    process.exit(1);
});

module.exports = {
    User, Message, Chat
};