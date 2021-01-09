import React from "react";
import "./Current.css";
import Humidity from "./Humidity";

export default function Search() {
  return (
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h2 id="card-city">London</h2>{" "}
          <h5 class="today">Sunday 15 November 2020, 16:50</h5>
          <h1 id="card-temperature">
            <i class="fas fa-cloud-sun"> </i> 9
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
          <Humidity />
        </div>
      </div>
    </div>
  );
}
