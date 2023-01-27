const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: String,
    status: Boolean,
    chatId: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }
});

const Message = model('Message', messageSchema);

module.exports = Message;