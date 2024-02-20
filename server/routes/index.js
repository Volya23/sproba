const Router = require('express');
const userRouter = require('./userRouter');
//const orderRouter = require('./orderRouter');

const rootRouter = Router();

rootRouter.use('/users', userRouter);
//rootRouter.use('/orders', orderRouter);

module.exports = rootRouter;