// const weatherDetails = document.getElementById("weatherDetails");
// const cityName = document.getElementById("cityName");
// const temp = document.getElementById("temp");
// const description = document.getElementById("description");
// const getWeatherButton = document.getElementById("getWeather");
// const cityInput = document.getElementById("city");
// getWeatherButton.addEventListener("click",()=>{
//   const city=cityInput.value.trim();
//   if(city ===""){
//     alert("Enter a city name");
//     return;
//   }
//   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
//   fetch(url)
//   .then(Response=>Response.json())
//   .then((data)=>{
//     if(data.cod===200){
//       cityName.textContent=`City:${data.name}`
//       temp.textContent=`Temperature:${data.main.temp}c`
//       description.textContent=`Wheather: ${data.weather[0].description}`

//       const WheatherMain =data.weather[0].main;
//       let backgroundImage
//       switch(WheatherMain){
//         case "Clear":
//             backgroundImage = "clear.jpg";
//             break;
//           case "Haze":
//             backgroundImage="mist.jpg";
//             break;
            
//           case "Mist":
//             backgroundImage="mist.jpg";
//             break
//           case "Clouds":
//             backgroundImage = "clouds.jpg";
//             break;
//           case "Smoke":
//             backgroundImage = "smoke.jpg";
//             break;
//           case "Snow":
//             backgroundImage = "snow.jpg";
//             break;
//           case "Thunderstorm":
//             backgroundImage = "thunderstorm.jpg";
//             break;
//           default:
//             backgroundImage = "clear.jpg";
//             break;
//       }
//       document.body.style.background = `url('${backgroundImage}') no-repeat center center fixed`;
//       document.body.style.backgroundSize = "cover";
    
//     }
//     else{
//       alert("city not found")
//     }
    
//   })
//   .catch((error)=>{
//     alert("error found while fetching data")
//   });
  

// })
// cityInput.addEventListener('input',()=>{
//   if(cityInput.value.trim()===""){
//     cityName.textContent="";
//     temp.textContent="";
//     description.textContent="";

//     document.body.style.background = `url('clear.jpg') no-repeat center center fixed`;
//     document.body.style.backgroundSize = "cover";
//   }
// })
