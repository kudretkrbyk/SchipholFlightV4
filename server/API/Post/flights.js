const express = require("express");
const router = express.Router();
const Flight = require("../../models/Flight");

// Uçuş eklemek için POST route
router.post("/", async (req, res) => {
  try {
    const { flightNumber, departure, arrival, date, airline } = req.body;

    const newFlight = new Flight({
      flightNumber,
      departure,
      arrival,
      date,
      airline,
    });

    await newFlight.save();
    res
      .status(201)
      .json({ message: "Uçuş başarıyla eklendi", flight: newFlight });
  } catch (error) {
    res.status(500).json({ message: "Veri eklenirken hata oluştu", error });
  }
});

module.exports = router;
