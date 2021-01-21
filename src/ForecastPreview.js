import React from "react"

export default function ForecastPreview (props){

    return(
    <div class="col-2">
        <h5>{new Date(props.data.dt*1000).getHours()}:00 </h5>
        <h1>
         <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather icon"/> 
        </h1>
        <h5>{Math.round(props.data.main.temp_max)}° | {Math.round(props.data.main.temp_min)}°</h5>
      </div>
    );
}
