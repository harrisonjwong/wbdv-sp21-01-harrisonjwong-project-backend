require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose');
// LOCAL DATABASE
// mongoose.connect('mongodb://localhost:27017/redditproject',
//   {useNewUrlParser: true, useUnifiedTopology: true});

const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0zeqf.mongodb.net/redditproject?retryWrites=true&w=majority`

try {
  mongoose.connect(mongoAtlasUri,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected'));
} catch (e) {
  console.log('could not connect', e);
}

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
  res.header('Access-Control-Allow-Origin', `${process.env.ALLOW_ORIGIN}`);
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

require('./controllers/user-controller')(app);
require('./controllers/favorite-post-controller')(app);

app.listen(process.env.PORT || 3001);