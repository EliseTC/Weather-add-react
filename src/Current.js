import React, {useState} from "react";
import axios from "axios";
import "./Current.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"; 
import Geolocation from "./Geolocation";

  
export default function Current(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [city, setCity] =useState(props.defaultCity);
  function handleResponse (response) {
      setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt *1000)
    });
  }

  function searchCity(){
  let apiKey = "b19a3f432de5f615851032aa1c827b12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
  event.preventDefault ();
}

function handleCityChange(event) {
  setCity(event.target.value);
  searchCity(city);
}

if (weatherData.ready) {
  return (
     <div>
      <div class="row">
      <div class="col-6">
        <form id="find-city" onSubmit={handleSubmit}>
          <div class="searchCity">
            <input
              type="text"
              class="form-control"
              id="exampleInputText"
              placeholder="Enter a city"
              onChange={handleCityChange}
            />
          </div>
        </form>
      </div>
      <Geolocation />
      <br />
      <br />
    </div>
       <div class="row">
      <div class="card">
        <div class="card-body">
          <br/>
          <h2 id="card-city">{weatherData.city}</h2>
          <h5 class="today"><FormattedDate date={weatherData.date}/></h5>
           <img
            src={weatherData.iconUrl} alt="weather icon"/><WeatherTemperature celsius={weatherData.temperature}/> 
           <p class="description">{" "}
      <span id="description">{weatherData.description}  </span> | Humidity:{" "}
      <span id="humidity"> {weatherData.humidity}</span>% | Wind: <span id="wind">{Math.round(weatherData.wind)}</span>km/h{" "}
    </p>
        </div>
      </div>
    </div>
  </div>
  );
} else {
  searchCity ();
  return "Loading...";
  }
}
