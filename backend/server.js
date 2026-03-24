const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const vehicleRoutes = require("./routes/vehicleRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/uploads", express.static("uploads"));

// MongoDB
mongoose.connect("mongodb://Naveen:NcB%40%2326DB@ac-1mlkptr-shard-00-00.bbqajyu.mongodb.net:27017,ac-1mlkptr-shard-00-01.bbqajyu.mongodb.net:27017,ac-1mlkptr-shard-00-02.bbqajyu.mongodb.net:27017/?ssl=true&replicaSet=atlas-md710q-shard-0&authSource=admin&appName=Cluster-1")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});