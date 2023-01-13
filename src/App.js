import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          this project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/46699-ishrar-islam"
            target="_blank"
            rel="noopener noreferrer"
          >
            ishy ♡
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ishyexe/react-apppie"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on github
          </a>{" "}
          and{" "}
          <a
            href="https://shimmering-sunflower-8dea68.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on netlify !
          </a>
        </footer>
      </div>
    </div>
  );
}
