const express = require("express");
const router = express.Router();
const Vehicle = require("../models/vehicle");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ADD VEHICLE WITH IMAGE
router.post("/add", upload.single("image"), async (req, res) => {
  const { name, type, price } = req.body;

  const vehicle = new Vehicle({
    name,
    type,
    price,
    image: req.file.filename
  });

  await vehicle.save();
  res.json({ message: "Vehicle added" });
});

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

router.delete("/:id", async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;