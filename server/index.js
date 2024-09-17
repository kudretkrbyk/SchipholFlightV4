const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/flights", async (req, res) => {
  const url =
    "https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime";

  const headers = {
    Accept: "application/json",
    app_id: "88d84de8",
    app_key: "bc36d80270d7dd258f0c16084d8f89df",
    ResourceVersion: "v4",
  };

  try {
    const response = await axios.get(url, { headers });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Bir hata oluştu.");
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
