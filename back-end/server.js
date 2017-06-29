var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Message = require('./controllers/Message');
var Auth = require('./controllers/Auth');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/CORS');

//Middleware
app.use(bodyParser.json());
app.use(cors);

//Requests
app.post('/api/message', checkAuthenticated, Message.postMessage);

app.post('/auth/register', Auth.register);

app.post('/auth/login', Auth.login);

app.get('/api/message', Message.getMessages);

//Connection
mongoose.connect("mongodb://localhost:27017/test", function(err, db){
  if(!err){
    console.log("we are connected to mongo");
  } else {
    console.log("unable to connect ot mongo", err);
  }
});

var server = app.listen(5000, function(){
  console.log('listening on port ', server.address().port);
});
