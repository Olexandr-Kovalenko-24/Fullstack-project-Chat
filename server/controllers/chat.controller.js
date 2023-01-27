const {Chat, Message} = require('../models');

module.exports.createChat = async (req, res, next) => {
    try {
        const {body} = req;
        const newChat = await Chat.create(body);
        res.status(201).send({data: newChat});
    } catch (error) {
        next(error);
    }
}

module.exports.addUserToChat = async (req, res, next) => {
    try {
        const {params: {chatId}, body: {userId}} = req;
        const chatInstance = await Chat.findById(chatId);
        chatInstance.members.push(userId);
        chatInstance.save();
        res.status(200).send({data: chatInstance});
    } catch (error) {
        next(error);
    }
}

module.exports.addNewMessage = async (req, res, next) => {
    try {
        const {body, params: {chatId}} = req;
        const chatInstance = await Chat.findById(chatId);
        const newMessage = await Message.create({...body, chatId});
        chatInstance.messages.push(newMessage);
        chatInstance.save();
        res.status(201).send({data: newMessage});
    } catch (error) {
        next(error);
    }
}

module.exports.getAllUserChats = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const allUserChats = await Chat.find({
            members: userId
        })
        res.status(200).send({data: allUserChats});
    } catch (error) {
        next(error);
    }
}

module.exports.getChatWithMessages = async (req, res, next) => {
    try {
        const {params: {chatId}} = req;
        const chatWithMessages = await Chat.findById(chatId).populate('messages');
        res.status(200).send({data: chatWithMessages});
    } catch (error) {
        next(error);
    }
}