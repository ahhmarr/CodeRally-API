const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const morgan = require('morgan');
const cors = require('cors');

const { errors } = require('celebrate');
const { mongoUrl } = require('../lib/config');

mongoose.connect(mongoUrl);
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', controllers);
app.use(errors());
app.use(
  express.static(path.join(__dirname, '..', '..', 'coderally-ui', 'build'))
);

module.exports = app;
