const {
  authenticate,
  encryptUserPW,
  compareUserPW
} = require('../utils/middlewares');

const { createUser, login } = require('../controllers');

module.exports = server => {
  server
    .route('/users')
    .post(encryptUserPW, createUser);
  server
    .route('/login')
    .post(compareUserPW, login);
    
};