const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Successfully connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

// app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;
