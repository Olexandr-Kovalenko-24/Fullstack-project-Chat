const {Router} = require('express');
const userController = require('../controllers/user.controller');
const {hashPass} = require('../middleware/hashPassword');

const userRouter = Router();

userRouter.post('/sign-up', hashPass, userController.signUpUser);
userRouter.post('/sign-in', hashPass, userController.signInUser);
userRouter.get('/:userId', userController.getOne);

module.exports = userRouter;