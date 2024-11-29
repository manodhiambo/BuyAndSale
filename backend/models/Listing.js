const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
	  title: { type: String, required: true },
	  description: { type: String, required: true },
	  price: { type: Number, required: true },
	  image: { type: String, required: true },
	  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Listing', ListingSchema);