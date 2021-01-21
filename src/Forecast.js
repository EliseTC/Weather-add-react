import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] =useState(false);
  const [forecast, setForecast]=useState(null);

  function handleForecastResponse(response) {
   setForecast(response.data);
   setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name) {
    return (
      <div class="row">
      
        <ForecastPreview data ={forecast.list[0]}/>
        <ForecastPreview data ={forecast.list[1]}/>
        <ForecastPreview data ={forecast.list[2]}/>
        <ForecastPreview data ={forecast.list[3]}/>
        <ForecastPreview data ={forecast.list[4]}/>
        <ForecastPreview data ={forecast.list[5]}/>
      </div>
    );
  } else {
     let apiKey= "b19a3f432de5f615851032aa1c827b12";
     let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
     axios.get(url).then(handleForecastResponse);

    return null;
  }
  
}
