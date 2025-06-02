//your JS code here. If required.
document.getElementById('getWeatherBtn').addEventListener('click', function () {
      const apiKey = "9b7052d5b6565e26f897460346ee21ef"; // Replace with your OpenWeatherMap API key
      const city = "London";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data.");
        }
        return response.json();
      })
      .then(data => {
        const weather = data.weather[0].main;
        document.getElementById('weatherData').textContent = `Current weather in London: ${weather}`;
      })
      .catch(error => {
        document.getElementById('weatherData').textContent = "Error: " + error.message;
      });
    });