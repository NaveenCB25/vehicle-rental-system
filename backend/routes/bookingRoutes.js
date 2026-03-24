const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// 🔹 ADD booking
router.post("/add", async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: "Booking successful" });
});

// 🔹 GET all bookings
router.get("/", async (req, res) => {
    const data = await Booking.find();
    res.json(data);
});

// 🔹 DELETE booking
router.delete("/:id", async (req, res) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

router.put("/:id", async (req, res) => {
    await Booking.findByIdAndUpdate(req.params.id, {
        status: "Paid"
    });
    res.json({ message: "Payment updated" });
});

module.exports = router;