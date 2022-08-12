const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
	_id: Number,
	name: String,
	abbr: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Country', CountrySchema );