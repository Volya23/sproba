const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const {getUserInstance} = require ('../middlewares/getUserInstance');
//const pagination = require ('../middlewares/pagination');

const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:userId', getUserInstance, UserController.getOneUser);
//userRouter.put('/:userId', getUserInstance, UserController.updatedUser);
userRouter.delete('/:userId', UserController.deleteUser);

module.exports = userRouter;