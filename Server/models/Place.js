const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  address: { type: String, required: true },
  photos: [String],
  description: { type: String, required: true },
  perks: [String],
  extraInfo: { type: String },
  checkIn: { type: Number, required: true },  // Store as Number (e.g., 14 for 14:00)
  checkOut: { type: Number, required: true },  // Store as Number (e.g., 11 for 11:00)
  maxGuests: { type: Number, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel;
