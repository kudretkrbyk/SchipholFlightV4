const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/flights", async (req, res) => {
  const url =
    "https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime";

  const headers = {
    Accept: "application/json",
    app_id: process.env.APP_ID, // .env dosyasından al
    app_key: process.env.APP_KEY, // .env dosyasından al
    ResourceVersion: "v4",
  };

  try {
    const response = await axios.get(url, { headers });
    console.log(response.data);
    console.log("burası");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Bir hata oluştu.");
  }
});

module.exports = router;
