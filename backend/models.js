const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * 
 * 
 * this needs to be filled out correctly to your specs
 */
const EntrySchema = Schema({
  
    entry: {
      type: String,
      unique: true,
      required: true,
    }
  });
  
module.exports = mongoose.model('Entry', EntrySchema);