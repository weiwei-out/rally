import "./02_HomePage.css";
import React, { useState, useRef, useCallback } from "react";

import Events from "./03_Events";
import Friends from "./04_Friends";
import Availability from "./05_Availability";
// import Search from "./06_Search";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

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
  // const onMapClick /19:30
  const [selected, setSelected] = useState(null);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div id="HomePage">
      <div>
        <div id="HomeLeft">
          <div onClick={() => setHomeContent("Events")}>events</div>
          <div onClick={() => setHomeContent("Friends")}>friends</div>
          <div onClick={() => setHomeContent("Availability")}>availability</div>
        </div>
        <div id="Content">
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
      </div>
      <div id="HomeRight">
        <div id="SearchBar">
          <Search panTo={panTo} />
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
          options={options}
          onLoad={onMapLoad}
          onClick={(event) => {
            console.log(event);
            setMarkers(() => [
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
              onClick={() => {
                setSelected(marker);
              }}
            />
          ))}
          {selected ? (
            <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}>
              <div>
                <h2>Test Hover Info</h2>
                <p>my name jeff</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}
export default Home;

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => center.lat, lng: () => center.lng },
      // location: { lat: () => 40.712776, lng: () => -74.005974 },
      radius: 100 * 1000, //meters -> km
    },
  });

  console.log(ready);
  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const result = await getGeocode({ address });
          const { lat, lng } = await getLatLng(result[0]);
          panTo({ lat, lng });
          console.log(result[0]);
          console.log(lat, lng);
        } catch (error) {
          console.log("error");
        }
        console.log(address);
      }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder={"search..."}
      />
      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption key={id} value={description} />
          ))}
      </ComboboxPopover>
    </Combobox>
  );
}
