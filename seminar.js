const weatherDetails = document.getElementById("weatherDetails");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const getWeatherButton = document.getElementById("getWeather");
const cityInput = document.getElementById("city");

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === ""){
    alert("Please enter a city name!");
    return;
  }
url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.cod === 200) {
        cityName.textContent = `City: ${data.name}`;
        temp.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Weather: ${data.weather[0].description}`;
        const weatherMain = data.weather[0].main;
        let backgroundImage;

        switch (weatherMain) {
          case "Clear":
            backgroundImage = "clear.jpg";
            break;
          case "Haze":
            backgroundImage="mist.jpg";
            break;
            
          case "Mist":
            backgroundImage="mist.jpg";
            break
          case "Clouds":
            backgroundImage = "clouds.jpg";
            break;
          case "Smoke":
            backgroundImage = "smoke.jpg";
            break;
          case "Snow":
            backgroundImage = "snow.jpg";
            break;
          case "Thunderstorm":
            backgroundImage = "thunderstorm.jpg";
            break;
          default:
            backgroundImage = "clear.jpg";
            break;
        }

        // Update the background
        document.body.style.background = `url('${backgroundImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
      } else {
        alert("City not found. Please try again.");
      }
   
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while fetching the weather data.");
    });
});
// Reset weather details when the input is cleared
cityInput.addEventListener("input", () => {
  if (cityInput.value.trim() === "") {
   // weatherDetails.classList.add("hidden");
    cityName.textContent = "";
    temp.textContent = "";
    description.textContent = "";

    // Reset the background to the default
    document.body.style.background = `url('clear.jpg') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  }
});