import React from "react";
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
