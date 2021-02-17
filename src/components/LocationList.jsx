import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    onSelectedLocation(city);
  };

  const strToComponents = () =>
    cities.map((city) => (
      <WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
        data={city.data}
      />
    ));

  return <div className="locationList">{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;
