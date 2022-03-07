import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <div className="App">
      <p>new</p>
      <iframe
        width="500"
        height="500"
        src="https://next442-tdelar.vercel.app/"
        title="description"
      ></iframe>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoidG9tbXlkZWwiLCJhIjoiY2t4NW4xbG9zMmR2aTJ1cDJnM2xuemd6diJ9.9YwDOFlOAN7Yn6rXYTSt-w"
      />
      ;
    </div>
  );
}

export default App;
