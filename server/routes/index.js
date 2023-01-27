const {Router} = require('express');
const userRouter = require('./userRouter');
const chatRouter = require('./chatRouter');

const apiRouter = Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/chats', chatRouter);

module.exports = apiRouter;