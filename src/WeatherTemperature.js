import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div class="WeatherTemperature">
         <h1 id="card-temperature">
             {Math.round(props.celsius)}
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
        </div>
    )
}



       