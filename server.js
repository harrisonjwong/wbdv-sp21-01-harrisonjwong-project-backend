const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/redditproject',
  {useNewUrlParser: true, useUnifiedTopology: true});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const session = require('express-session');
app.use(session({
  secret: 'abc def ghij',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

// configure CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

require('./controllers/user-controller')(app);

app.listen(3001);