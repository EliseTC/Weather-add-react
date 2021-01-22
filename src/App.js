import React from "react";
import "./App.css";

import Current from "./Current";


export default function App() {
  return (
    <div className="App">
      <div class="container">
       <Current defaultCity="London"/>
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
