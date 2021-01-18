import React from "react";
import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div class="container">
       <Search/>
        <Current defaultCity="London"/>
        <Forecast />
      </div>
      <footer>
        <small>
          <a href="https://github.com/EliseTC/Weather-add-react" >
            Open-source code
          </a>{" "}
          by Elisabeth ten Cate
        </small>
      </footer>
    </div>
  );
}
