const express = require("express");
const cors = require("cors");
const flightsRouter = require("./API/Get/flights");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", flightsRouter);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
