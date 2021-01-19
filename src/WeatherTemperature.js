import React, {useState} from "react";

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState ("celsius");
    
    function convertToFahrenheit (event) {
      event.preventDefault ();
      setUnit ("fahrenheit");
    }

    function convertToCelsius (event) {
      event.preventDefault ();
      setUnit ("celsius");
    }

    if (unit === "celsius") {
  	  return (
       
        <div class="WeatherTemperature">
         <h1 id="card-temperature">
             {Math.round(props.celsius)} 
            <span class="units">
               °C
              |
              <a href="/" onClick={convertToFahrenheit} id="fahrenheit">
                °F
              </a>{" "}
            </span>{" "}
         </h1>
        </div>
       
    );

    } else {
      let fahrenheit = (props.celsius*9)/5+32;
      return (
      
        <div class="WeatherTemperature">
            
         <h1 id="card-temperature">
             {Math.round(fahrenheit)} 
            <span class="units">
               <a href="/" onClick={convertToCelsius} id="fahrenheit">°C </a>{" "}
              |
                °F
            </span>{" "}
         </h1>
        </div>
        
    );

    }
    
}



       