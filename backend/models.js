const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  }
});

// UserSchema.methods.checkPassword = function(potentionalPassword, cb) {
//   bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };
// module.exports = mongoose.model('User', UserSchema);