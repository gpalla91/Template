var Message = require('../models/Message');

module.exports = {
  getMessages: function(req, res){
    Message.find({}).populate('user', '-password').exec(function(err, result){
      res.send(result);
    });
  },

  postMessage: function(req, res){
    console.log(req.body, req.user);
    req.body.user = req.user;
    var message = new Message(req.body);
    message.save();
    res.status(200).send({ message : 'Done'});
  }
}
