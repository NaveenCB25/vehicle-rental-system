const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle");

// Add vehicle
router.post("/add", async (req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.json({ message: "Vehicle added" });
});

// Get vehicles
router.get("/", async (req, res) => {
    const data = await Vehicle.find();
    res.json(data);
});

module.exports = router;