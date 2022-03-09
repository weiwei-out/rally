import "./02_HomePage.css";
import React, { useState } from "react";

import Events from "./03_Events";
import Friends from "./04_Friends";
import Availability from "./05_Availability";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "30vw",
  height: "30vw",
};
const center = { lat: 40.712776, lng: -74.005974 };

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  // streetViewControl: true,
  // rotateControl: true,
  fullscreenControl: true,
};

function Home() {
  const [HomeContent, setHomeContent] = useState("Events");
  const [markers, setMarkers] = useState([]);
  // const onMapClick = useCallback(() => {}, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div id="HomePage">
      <div>
        <div id="HomeLeft">
          <div onClick={() => setHomeContent("Events")}>Events</div>
          <div onClick={() => setHomeContent("Friends")}>Friends</div>
          <div onClick={() => setHomeContent("Availability")}>Availability</div>
        </div>
        {HomeContent === "Events" ? (
          <Events />
        ) : HomeContent === "Friends" ? (
          <Friends />
        ) : HomeContent === "Availability" ? (
          <Availability />
        ) : (
          <Events />
        )}
      </div>
      <div id="HomeRight">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
          options={options}
          onClick={(event) => {
            console.log(event);
            setMarkers((current) => [
              ...current,
              {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
              },
            ]);
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/Logo.svg",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(5, 29),
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Home;
