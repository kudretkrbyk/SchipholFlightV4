const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flightsRouter = require("./API/Get/flights"); // Get rotası
const postFlightsRouter = require("./API/Post/flights"); // Post rotası
const flightRoutes = require("./API/Get/flightRoutes"); // Flight routes'u ekleyin

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB bağlantısı
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/flightDB";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB bağlantı hatası:"));
db.once("open", () => {
  console.log("MongoDB'ye başarıyla bağlanıldı");
});

app.use(cors());
app.use(express.json());

app.use("/api/flights", flightsRouter); // Get rotası
app.use("/api/flightsDb", flightRoutes); // MongoDB Uçuşları al Get
app.use("/api/flights", postFlightsRouter); //MongoDB uçuşları gönder Post rotası

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
