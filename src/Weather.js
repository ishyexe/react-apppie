import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="where u at.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn-btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Tokyo, Japan </h1>
      <ul>
        <li> Friday 6:00 AM </li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Mostly sunny"
          />
          0℃
        </div>
        <div className="col-6">
          <ul>
            <li> Preciptation: 10% </li>
            <li>Humidity:60%</li>
            <li>Wind: 0 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
