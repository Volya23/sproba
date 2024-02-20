const express = require('express');
const rootRouter = require ('./routes');
//const cors = require('cors');
const UserController = require ('./controllers/user.controller');

//const { errorHandler } = require('./errorHandler.js');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

app.use('/api/', rootRouter);

//app.use(errorHandler);


module.exports = app;