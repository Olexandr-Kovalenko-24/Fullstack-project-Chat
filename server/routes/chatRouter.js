const {Router} = require('express');
const chatController = require('../controllers/chat.controller');

const chatRouter = Router();

chatRouter.post('/', chatController.createChat);
chatRouter.post('/:chatId', chatController.addNewMessage);
chatRouter.get('/:chatId', chatController.getChatWithMessages);
chatRouter.get('/user/:userId', chatController.getAllUserChats);
chatRouter.put('/:chatId', chatController.addUserToChat);

module.exports = chatRouter;