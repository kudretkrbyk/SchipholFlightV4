export const flightsApiDb = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/flightsDb");
    const data = await response.json();
    console.log("api içi veriler", data);

    return data; // Uçuş verilerini döndür
  } catch (error) {
    console.error("Uçuş verileri alınamadı:", error);
    throw error; // Hata durumunda hatayı fırlat
  }
};
