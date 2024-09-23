//API'den tüm uçuşları al

const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/", async (req, res) => {
  const url =
    "https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime";

  const headers = {
    Accept: "application/json",
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY,
    ResourceVersion: "v4",
  };

  try {
    // Uçuş verilerini al
    const response = await axios.get(url, { headers });
    const flights = response.data.flights;

    // Tüm destinationCode'ları topla
    const destinationCodes = flights.map(
      (flight) => flight.route.destinations[0]
    );

    // Benzersiz destinationCode'ları filtrele
    const uniqueDestinationCodes = [...new Set(destinationCodes)];

    // Tüm prefixICAO kodlarını topla
    const airlineCodes = flights.map((flight) => flight.prefixICAO);
    const uniqueAirlineCodes = [...new Set(airlineCodes)];

    // Benzersiz destinationCode'lar için şehir bilgilerini al
    const cityInfoPromises = uniqueDestinationCodes.map(async (code) => {
      try {
        const cityResponse = await axios.get(
          `https://api.schiphol.nl/public-flights/destinations/${code}`,
          { headers }
        );
        return {
          code,
          cityName: cityResponse.data.city || "Bilinmeyen Şehir",
        };
      } catch (error) {
        console.error(
          `Destination ${code} için şehir bilgisi alınamadı:`,
          error
        );
        return {
          code,
          cityName: "Bilinmeyen Şehir",
        };
      }
    });

    // Benzersiz havayolu kodları için havayolu bilgilerini al
    const airlineInfoPromises = uniqueAirlineCodes.map(async (code) => {
      try {
        const airlineResponse = await axios.get(
          `https://api.schiphol.nl/public-flights/airlines/${code}`,
          { headers }
        );
        return {
          code,
          airlineName: airlineResponse.data.publicName || "Bilinmeyen Havayolu",
        };
      } catch (error) {
        console.error(
          `Airline ${code} için havayolu bilgisi alınamadı:`,
          error
        );
        return {
          code,
          airlineName: "Bilinmeyen Havayolu",
        };
      }
    });

    // Şehir bilgilerini ve havayolu bilgilerini aldıktan sonra bir sözlük (dictionary) yapısına çevir
    const cityInfoList = await Promise.all(cityInfoPromises);
    const cityInfoMap = cityInfoList.reduce((acc, city) => {
      acc[city.code] = city.cityName;
      return acc;
    }, {});

    const airlineInfoList = await Promise.all(airlineInfoPromises);
    const airlineInfoMap = airlineInfoList.reduce((acc, airline) => {
      acc[airline.code] = airline.airlineName;
      return acc;
    }, {});

    // Uçuş verilerine şehir ve havayolu bilgilerini ekle
    const updatedFlights = flights.map((flight) => {
      const destinationCode = flight.route.destinations[0];
      const airlineCode = flight.prefixICAO;

      flight.cityName = cityInfoMap[destinationCode] || "Bilinmeyen Şehir";
      flight.airlineName = airlineInfoMap[airlineCode] || "Bilinmeyen Havayolu";

      return flight;
    });

    // Güncellenmiş uçuş verilerini frontend'e gönder
    res.json(updatedFlights);
    console.log(updatedFlights);
  } catch (error) {
    console.error("Uçuş verisi alınırken hata oluştu:", error);
    res.status(500).send("Bir hata oluştu.");
  }
});

module.exports = router;
