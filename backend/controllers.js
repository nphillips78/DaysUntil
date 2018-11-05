const jwt = require('jsonwebtoken');
const { mysecret } = require('../config');
const User = require('./models');
const mongoose =require('mongoose');

const createUser = (rew, res) => {
  const { username, password } = req.body;
  const user = new User(req.body);
  user.save(function(err, user) {
    if(err) {
      return(err);
    }
    res.status(200).json(user);
  });
};

const login = (req, res) => {
  if(!req.username) {
    return res.status(403).json({
      error: 'no username check your comparePW middleware'
    });
  }
  const payload = {
    username: req.username
  };
  const token = jwt.sign(payload, mysecret); // creates JWT with secret and a payload and a hash
  res.json({ token }); // sends the token back to the client
};


module.exports = {
  createUser,
  login
};
