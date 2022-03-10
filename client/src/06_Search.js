import React from "react";
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

function Search({ lat, lng, handleCity, setZoom }) {
  const {
    //is this ready to go?
    ready,
    //current value being typed
    value,
    //suggestions getting back and the data itself
    suggestions: { status, data },
    //function to set the value
    setValue,
    //function to clear out suggestions
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      //This will request places close to the the lat and lon you gave
      location: { lat: () => lat, lng: () => lng },
      radius: 100 * 1000,
    },
  });
  console.log(ready);
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          //sets valuie to whatever you click on
          setValue(address, false);
          //then clears all other selctions
          clearSuggestions();
          //Will try to run this. If it can not it will give an error
          try {
            const results = await getGeocode({ address });
            //this pulls the lat, lng from getGeocode
            const { lat, lng } = await getLatLng(results[0]);
            //sends infor back to handleCity
            setZoom(11.5);
            handleCity({ lat, lng });
            setValue("");
          } catch (error) {
            console.log("error");
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          //If not ready disable box
          disabled={!ready}
          placeholder="Search your location"
          className="input"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              //maps over all suggestions and returns id and description
              data.map(({ description }) => (
                <ComboboxOption key={Math.random()} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Search;
