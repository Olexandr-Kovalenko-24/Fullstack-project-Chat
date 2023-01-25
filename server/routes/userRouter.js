const {Router} = require('express');

const userRouter = Router();

userRouter.post('/sign-up');
userRouter.post('/sign-in');
userRouter.get('/:userId');

module.exports = userRouter;