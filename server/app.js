const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const app = express();
const {errorHandler} = require('./errorHandler');

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.use(errorHandler);

module.exports = app;