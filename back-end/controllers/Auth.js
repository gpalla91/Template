var User = require('../models/User');
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');
var crypto = require('crypto');
module.exports = {
  register: function(req, res){
    User.findOne({email: req.body.email}, function(err, existingUser){
      if(existingUser){
        return res.status(409).send({message:'Email is already registered'});
      } else {
        var userData = {
          email: req.body.email,
          password: crypto.createHash('md5').update(req.body.password).digest("hex"),
          firstName: req.body.firstName,
          lastName: req.body.lastName
        }
        var user = new User(userData);
        user.save(function(err, result){
          if(err){
            return res.status(500).send({
              message: err.message
            });
          }
          res.status(200).send({ token : createToken(result)});
        })
      }
    });
  },
  login: function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
      if(!user){
        return res.status(401).send({message:'Email or Password invalid'});
      }

      if(crypto.createHash('md5').update(req.body.password).digest("hex") == user.password){
        res.status(200).send({
          token: createToken(user)
        });
      } else {
        return res.status(401).send({
          message: 'Invalid email and/or password'
        });
      }
    });
  }
}

function createToken(user){
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(1, 'days').unix()
  };
  return jwt.encode(payload,config.secret);
};
