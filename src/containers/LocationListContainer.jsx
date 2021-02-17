import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setSelectedCity as setSelectedCity_,
  setWeather as setWeather_,
} from "../actions";
import { getWeatherCities, getCity } from "../reducers";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setSelectedCity, cities, city } = this.props;

    setWeather(cities);
    setSelectedCity(city);
  }

  handleSelectedLocation = (city) => {
    const { setSelectedCity } = this.props;
    setSelectedCity(city);
  };

  render() {
    const { citiesWeather } = this.props;
    return (
      <LocationList
        cities={citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.defaultProps = {
  citiesWeather: null,
};

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  citiesWeather: PropTypes.arrayOf(PropTypes.shape({})),
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedCity: (value) => dispatch(setSelectedCity_(value)),
  setWeather: (cities) => dispatch(setWeather_(cities)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);
