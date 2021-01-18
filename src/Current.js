import React, {useState} from "react";
import axios from "axios";
import "./Current.css";
import FormattedDate from "./FormattedDate";

export default function Current() {
  let [ready, setReady] = useState (false);
  let [weatherData, setWeatherData] = useState({});
  function handleResponse (response) {
      setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
      date: new Date(response.data.dt *1000)
    });
    setReady(true);
  }
if (ready) {
  return (
    <div class="row">
      <div class="card">
        <div class="card-body">
          <br/>
          <h2 id="card-city">{weatherData.city}</h2>
          <h5 class="today"><FormattedDate date={weatherData.date}/></h5>
          <h1 id="card-temperature">
            <img
            src={weatherData.iconUrl} alt="weather icon"/> {Math.round(weatherData.temperature)}
            <span class="units">
              <a href="https://app.netlify.com/sites/quirky-turing-7773bf" id="celsius">
                {" "}
                °C
              </a>{" "}
              |
              <a href="https://app.netlify.com/sites/quirky-turing-7773bf" id="fahrenheit">
                °F
              </a>{" "}
            </span>{" "}
          </h1>
           <p class="description">{" "}
      <span id="description">{weatherData.description}  </span> | Humidity:{" "}
      <span id="humidity"> {weatherData.humidity}</span>% | Wind: <span id="wind">{Math.round(weatherData.wind)}-</span>km/h{" "}
    </p>
        </div>
      </div>
    </div>
  );
} else {
  let city = "London"  
  let apiKey = "b19a3f432de5f615851032aa1c827b12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}
