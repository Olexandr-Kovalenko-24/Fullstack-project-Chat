const {Router} = require('express');
const userController = require('../controllers/user.controller');
const {hashPass} = require('../middleware/hashPassword');
const {checkToken} = require('../middleware/checkToken');

const userRouter = Router();

userRouter.post('/sign-up', hashPass, userController.signUpUser);
userRouter.post('/sign-in', hashPass, userController.signInUser);
userRouter.get('/', checkToken, userController.getOne);
userRouter.post('/refresh', userController.refreshSession);

module.exports = userRouter;