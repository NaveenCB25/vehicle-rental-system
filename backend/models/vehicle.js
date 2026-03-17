const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    available: Boolean
});

module.exports = mongoose.model("Vehicle", vehicleSchema);