const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    birthday: Date,
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;