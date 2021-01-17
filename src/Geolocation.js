import React from "react";
import axios from "axios"
import "./Geolocation.css";

export default function Search() {
  return (
    <div class="col-6">
      <div class="geoLocation">
        <button class="currentLocation">
          <i class="fas fa-map-marked-alt"></i>
        </button>
      </div>
    </div>
  );
}
