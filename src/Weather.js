import React from "react";
import axios from 'axios';

export default function Weather () {
    
  function handleSubmit(response) {
    alert (`The weather in New York is ${response.data.main.temp} degrees Celsius`);
  }
    let apiKey = "b19a3f432de5f615851032aa1c827b12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
    
  
  axios.get(apiUrl).then(handleSubmit);
    return (
        <h2> Hello from Weather</h2> )
    }

