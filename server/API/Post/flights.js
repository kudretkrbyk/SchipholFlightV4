const express = require("express");
const router = express.Router();
const Flight = require("../../models/Flight");

// MongoDB Uçuş eklemek için POST route
router.post("/", async (req, res) => {
  try {
    const {
      id,
      actualLandingTime,
      aircraftType,
      airlineCode,
      airlineName,
      baggageClaim,
      cityName,
      estimatedLandingTime,
      expectedTimeOnBelt,
      flightDirection,
      flightName,
      flightNumber,
      isOperationalFlight,
      lastUpdatedAt,
      mainFlight,
      prefixIATA,
      prefixICAO,
      publicFlightState,
      route,
      eu,
      visa,
      scheduleDate,
      scheduleDateTime,
      scheduleTime,
      schemaVersion,
      serviceType,
      terminal,
    } = req.body;

    // Aynı id ile kayıtlı bir uçuş var mı diye kontrol ediyoruz
    const existingFlight = await Flight.findOne({ id });

    if (existingFlight) {
      return res.status(400).json({ message: "Bu uçuş zaten kayıtlı." });
    }

    const newFlight = new Flight({
      id,
      actualLandingTime,
      aircraftType,
      airlineCode,
      airlineName,
      baggageClaim,
      cityName,
      estimatedLandingTime,
      expectedTimeOnBelt,
      flightDirection,
      flightName,
      flightNumber,
      isOperationalFlight,
      lastUpdatedAt,
      mainFlight,
      prefixIATA,
      prefixICAO,
      publicFlightState,
      route,
      eu,
      visa,
      scheduleDate,
      scheduleDateTime,
      scheduleTime,
      schemaVersion,
      serviceType,
      terminal,
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
