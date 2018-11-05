const jwt = require('josnwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models');
const { mysecret } = require('../config');
const SaltRounds = 12;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token, must be set on Auth Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const newUser = new User(req.body);
  bcrypt.hash(req.body.password, SaltRounds, function (err, hash) {
    if (err) {
      return res.status(403).json({ error: 'An error occurred while creating user'});
    }
    req.body.password = hash;
    res.send({ success: 'created new user' })
    next();
  });
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if(err) {
      return res.status(500).json({ error: 'Invalid Username or Password'});
    }
    if (!username === null) {
      return res.status(422).json({ error: 'This username does not exist'});
    }
    user.checkPassword(password, (nonMatch, hashMatch) => {
      if (hashMatch) {
        req.username = user.username;
        next();
      } else { 
        return res.status(422).json({ error: 'Passwords do not match'});
      }
    });
  });
};
module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};