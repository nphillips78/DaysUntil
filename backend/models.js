const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * 
 * 
 * this needs to be filled out correctly to your specs
 */
const EntrySchema = Schema({
    // each entry requires a title and a date
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