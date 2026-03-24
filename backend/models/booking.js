const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    vehicleId: String,
    userName: String,
    amount: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);