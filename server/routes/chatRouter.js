const {Router} = require('express');
const chatController = require('../controllers/chat.controller');
const {checkToken} = require('../middleware/checkToken');

const chatRouter = Router();

chatRouter.post('/', checkToken, chatController.createChat);
chatRouter.post('/:chatId', checkToken, chatController.addNewMessage);
chatRouter.get('/:chatId', checkToken, chatController.getChatWithMessages);
chatRouter.get('/user/all', checkToken, chatController.getAllUserChats);
chatRouter.put('/:chatId', checkToken, chatController.addUserToChat);

module.exports = chatRouter;