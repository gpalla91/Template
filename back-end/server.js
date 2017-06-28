var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var Message = require('./controllers/Message');
var Auth = require('./controllers/Auth');
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post('/api/message', Message.postMessage);

app.post('/auth/register', Auth.register);

app.get('/api/message', Message.getMessages);

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
