const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * 
 * 
 * this needs to be filled out correctly to your specs
 */
const EntrySchema = Schema({
  
    title: {
      type: String,
      unique: true,
      required: true,
    },
    date: {
      type: Date,
      unique: true,
      required: true,
    }
  });
  
module.exports = mongoose.model('Entry', EntrySchema);