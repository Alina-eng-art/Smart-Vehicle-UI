import "./App.css";
import car from "./assets/car.png";
import { useState } from "react";

function Block({ green }) {
  return (
    <div className="block fade-in fake-ui">
      <div className="row">
        <div className="line big"></div>
        <div className="square small"></div>
      </div>

      <div className="line-bottom long"></div>
      <div className="line-bottom mid"></div>

      <div className="bottom-inside">
        <div className="mini"></div>
        <div className="mini"></div>
        <div className="mini"></div>

        {green === "line" && <div className="green-line"></div>}
        {green === "dot" && <div className="green-dot"></div>}
      </div>
    </div>
  );
}

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="app" onClick={() => setStart(true)}>

      {/* ===== TOP ===== */}
      <div className="top slide-down">

        <div className={`top-lines-full ${start ? "hide-lines" : ""}`}>
          <div className="nav-line small"></div>
          <div className="nav-line big"></div>
          <div className="nav-line mid"></div>
        </div>

        <div className={`real-navbar ${start ? "show-nav" : ""}`}>
          <div className="nav-left">MyCar</div>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Vehicle</a>
            <a href="#">Stats</a>
            <a href="#">Settings</a>
          </div>

          <div className="nav-right">
            <button
              className="nav-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Start
            </button>
          </div>
        </div>

      </div>

      {/* 🔥 ПОЛОСКИ */}
      <div className="skeleton-top">

  {/* FAKE (полоски) */}
  <div className={`skeleton-lines ${start ? "hide" : ""}`}>
    <div className="s-line big"></div>
    <div className="s-line mid"></div>
    <div className="s-line small"></div>
  </div>

  {/* REAL (текст) */}
  <div className={`hero-text ${start ? "show" : ""}`}>
  <h1>Smart Vehicle System</h1>
  <p className="subtitle">All systems operational</p>
  <p className="sub">Eco mode enabled • Navigation active</p>
</div>


</div>
      {/* ===== LEFT ===== */}
      <div className="left">

        {/* FAKE */}
        <div className={`left-stack ${start ? "hide" : ""}`}>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>

        {/* REAL */}
        <div className={`side-panel-real ${start ? "show" : ""}`}>
          <div className="mini-box"></div>
          <div className="mini-box"></div>
          <div className="mini-box"></div>
        </div>

      </div>

      <div className={`left-extra slide-left fake-ui ${start ? "hide" : ""}`}>
        <div className="line-bottom long"></div>
        <div className="line-bottom mid"></div>
        <div className="line-bottom short"></div>
      </div>

      {/* ===== RIGHT FAKE ===== */}
      <div className={`right slide-right fake-ui ${start ? "hide" : ""}`}>
        <Block />
        <Block green="line" />
      </div>

      {/* ===== FAKE BOTTOM ===== */}
      <div className={`bottom fake-ui ${start ? "hide" : ""}`}>
        <Block />
        <Block green="line" />
        <Block green="dot" />
      </div>

      {/* ===== REAL BOTTOM ===== */}
      <div className="real-bottom">

        <div className="real-card large bottom-card">
          <div className="card-header">
            <span>🚗 Vehicle</span>
            <div className="nav-icon">⚙️</div>
          </div>
          <div className="main-text">Speed: 72 km/h</div>
          <div className="sub-text">Mode: Eco Drive</div>
          <div className="sub-text">Status: Active</div>
          <div className="card-footer">
            <span className="green">Driving Smooth</span>
            <span>Auto Pilot</span>
          </div>
        </div>

        <div className="real-card large bottom-card">
          <div className="card-header">
            <span>📊 Trip</span>
            <div className="nav-icon">📍</div>
          </div>
          <div className="main-text">Distance: 18 km</div>
          <div className="sub-text">Avg speed: 65 km/h</div>
          <div className="sub-text">Time: 22 min</div>
          <div className="card-footer">
            <span className="green">On Track</span>
            <span>Optimal</span>
          </div>
        </div>

        <div className="real-card large bottom-card">
          <div className="card-header">
            <span>🌡️ System</span>
            <div className="nav-icon">🔋</div>
          </div>
          <div className="main-text">Motor Temp: 68°C</div>
          <div className="sub-text">Battery: Stable</div>
          <div className="sub-text">Cooling: Active</div>
          <div className="card-footer">
            <span className="green">All Good</span>
            <span>Safe</span>
          </div>
        </div>

      </div>

      {/* ===== CENTER ===== */}
      <div className="center">

        <div className={`center-card ${start ? "hide" : ""}`}>
          <div className="image-icon">
            <div className="mountain"></div>
            <div className="sun"></div>
          </div>
        </div>

        <img
          src={car}
          className={`car-center ${start ? "drive" : ""}`}
        />
      </div>

      {/* ===== REAL UI ===== */}
      <div className={`real-ui ${start ? "show-nav" : ""}`}>

        <div className="real-card large nav-card">
          <div className="card-header">
            <span>🧭 Navigation</span>
            <div className="nav-icon">📍</div>
          </div>

          <div className="map real-map">
            <div className="map-grid"></div>
            <div className="main-road"></div>
            <div className="second-road"></div>
            <div className="route"></div>
            <div className="car-dot"></div>
            <div className="pin start"></div>
            <div className="pin end"></div>
          </div>

          <div className="card-footer">
            <div>
              <div className="main-text">Kyiv Center</div>
              <div className="sub-text">ETA: 12 min</div>
            </div>
            <div className="green">Active</div>
          </div>
        </div>

        <div className="real-card large right-bottom-card">
          <div className="card-header">
            <span>🔋 Battery Status</span>
            <div className="battery-icon">⚡</div>
          </div>

          <div className="main-text">Charge Level: 85%</div>
          <div className="sub-text">Estimated range: 420 km</div>
          <div className="sub-text">Charging time: 1h 20m</div>

          <div className="battery-bar">
            <div className="battery-fill"></div>
          </div>

          <div className="card-footer">
            <span className="green">Charging Stable</span>
            <span>Fast Mode</span>
          </div>
        </div>

      </div>

    </div>
  );
}
