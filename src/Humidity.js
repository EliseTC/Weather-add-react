import React from "react";
import axios from "axios"
import "./Humidity.css";

export default function Search() {
  return (
    <p class="description">
      {" "}
      <span id="description">-- </span> | Humidity:{" "}
      <span id="humidity"> --</span>% | Wind: <span id="wind">--</span>km/h{" "}
    </p>
  );
}
