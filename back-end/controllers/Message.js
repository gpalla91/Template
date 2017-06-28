var Message = require('../models/Message');

module.exports = {
  getMessages: function(req, res){
    Message.find({}).exec(function(err, result){
      res.send(result);
    });
  },

  postMessage: function(req, res){
    var message = new Message(req.body);
    message.save();
    res.status(200).send({ message : 'Done'});
  }
}
