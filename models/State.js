const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    name: { type: String, required: true, unique: true },
    abbr: { type: String, required: true, unique: true },
    country: { type: Number, ref: 'Country' },
    _id: Number,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('State', StateSchema);