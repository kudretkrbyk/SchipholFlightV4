const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  date: { type: Date, required: true },
  airline: { type: String, required: true },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
