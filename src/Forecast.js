import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="row">
      <div class="col-2">
        <h5>18:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>
        <h5>10 | 9°</h5>
      </div>
      <div class="col-2">
        <h5>21:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>
        <h5>10 | 9°</h5>
      </div>
      <div class="col-2">
        <h5>00:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>
        <h5>10 | 9°</h5>
      </div>
      <div class="col-2">
        <h5>03:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>
        <h5>10 | 9°</h5>
      </div>
      <div class="col-2">
        <h5>06:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>
        <h5>10 | 9°</h5>
      </div>
      <div class="col-2">
        <h5>09:00 </h5>
        <h1>
          <i class="fas fa-cloud-sun"></i>
        </h1>{" "}
        <h5>10 | 9°</h5>
      </div>
    </div>
  );
}
