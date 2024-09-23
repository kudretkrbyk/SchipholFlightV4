const express = require("express");
const router = express.Router();
const Flight = require("../../models/Flight");

// MongoDB uçuşları  almak için GET route
router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find(); // Veritabanından tüm uçuşları getir
    res.status(200).json(flights); // Uçuşları JSON olarak döndür
  } catch (error) {
    res.status(500).json({ message: "Veriler alınırken hata oluştu", error });
  }
});

module.exports = router;
