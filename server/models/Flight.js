//MongoDB Modeli Tüm verileri alıyoruz

const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  actualLandingTime: { type: String }, // Tarih verisi olarak string tutuluyor
  aircraftType: {
    iataMain: { type: String }, // Uçak ana türü
    iataSub: { type: String }, // Uçak alt türü
  },
  airlineCode: { type: Number }, // Havayolu kodu
  airlineName: { type: String }, // Havayolu adı
  baggageClaim: {
    belts: [{ type: String }], // Baggage belts listesi
  },
  cityName: { type: String }, // Şehir adı
  estimatedLandingTime: { type: String }, // Tahmini iniş zamanı
  expectedTimeOnBelt: { type: String }, // Bagaj beklenen zaman
  flightDirection: { type: String }, // Uçuş yönü (örn. "A")
  flightName: { type: String }, // Uçuş adı (örn. "HV5586")
  flightNumber: { type: Number }, // Uçuş numarası
  id: { type: String }, // Uçuş ID'si
  isOperationalFlight: { type: Boolean }, // Operasyonel uçuş mu?
  lastUpdatedAt: { type: String }, // Son güncelleme zamanı
  mainFlight: { type: String }, // Ana uçuş adı
  prefixIATA: { type: String }, // IATA ön eki
  prefixICAO: { type: String }, // ICAO ön eki
  publicFlightState: {
    flightStates: [{ type: String }], // Uçuş durumları listesi (örn. "ARR", "EXP")
  },
  route: {
    destinations: [{ type: String }], // Uçuş destinasyonları
  },
  eu: { type: String }, // AB bilgisi (örn. "S")
  visa: { type: Boolean }, // Vize durumu
  scheduleDate: { type: String }, // Planlanan tarih
  scheduleDateTime: { type: String }, // Planlanan tarih ve zaman
  scheduleTime: { type: String }, // Planlanan zaman
  schemaVersion: { type: String }, // Şema versiyonu
  serviceType: { type: String }, // Servis türü (örn. "J")
  terminal: { type: Number }, // Terminal numarası
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
