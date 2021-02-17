import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import "./styles.css";

const renderForecastItemDays = (forecastData) =>
  forecastData.map((forecast) => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ));

const renderProgress = () => <h3>Cargando Pronóstico Extendido...</h3>;

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forecastTitle">
      Pronóstico Extendido para
      {city}
    </h2>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForecastExtended.defaultProps = {
  forecastData: null,
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ForecastExtended;
