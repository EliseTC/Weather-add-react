import React from "react";
import "./Search.css";
import Geolocation from "./Geolocation";

export default function Search() {
  return (
    <div class="row">
      <div class="col-6">
        <form id="find-city">
          <div class="searchCity">
            <input
              type="text"
              class="form-control"
              id="exampleInputText"
              placeholder="Enter a city"
            />
          </div>
        </form>
      </div>
      <Geolocation />
      <br />
      <br />
    </div>
  );
}
