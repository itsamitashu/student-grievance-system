const express = require("express");
const router = express.Router();
const Grievance = require("../models/Grievance");


// POST → Submit Grievance
router.post("/grievances", async (req, res) => {
  try {
    const grievance = await Grievance.create(req.body);

    res.status(201).json({
      message: "Grievance Submitted Successfully",
      grievance
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET → View All Grievances
router.get("/grievances", async (req, res) => {
  try {
    const grievances = await Grievance.find();

    res.status(200).json(grievances);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET → View Grievance by ID
router.get("/grievances/:id", async (req, res) => {
  try {
    const grievance = await Grievance.findById(req.params.id);

    if (!grievance) {
      return res.status(404).json({
        message: "Grievance not found"
      });
    }

    res.status(200).json(grievance);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// PUT → Update Grievance
router.put("/grievances/:id", async (req, res) => {
  try {
    const updatedGrievance =
      await Grievance.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      message: "Grievance Updated Successfully",
      updatedGrievance
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// DELETE → Delete Grievance
router.delete("/grievances/:id", async (req, res) => {
  try {
    await Grievance.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Grievance Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// SEARCH → Search by Title
router.get("/grievances/search", async (req, res) => {
  try {
    const { title } = req.query;

    const grievances = await Grievance.find({
      title: {
        $regex: title,
        $options: "i"
      }
    });

    res.status(200).json(grievances);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;