const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES IMPORT

const authRoutes = require("./routes/authRoutes");
const grievanceRoutes = require("./routes/grievanceRoutes");


// API ROUTES

app.use("/api", authRoutes);
app.use("/api", grievanceRoutes);


// TEST ROUTE

app.get("/", (req, res) => {
  res.send("Student Grievance Backend Running");
});


// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log(err);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});