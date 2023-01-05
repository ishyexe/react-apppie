import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>weather app</h1>
      <footer>
        {" "}
        <Weather />
        this app was created by ishy ♡ and is open sourced on
        <a href="https://github.com/ishyexe/react-apppie"> github</a> !
      </footer>
    </div>
  );
}
