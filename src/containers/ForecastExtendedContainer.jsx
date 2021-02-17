import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCity, getForecastDataFromCities } from "../reducers";
import ForecastExtended from "../components/ForecastExtended";

class ForecastExtendedContainer extends PureComponent {
  render() {
    const { city, forecastData } = this.props;
    return city && <ForecastExtended city={city} forecastData={forecastData} />;
  }
}

ForecastExtendedContainer.defaultProps = {
  forecastData: null,
};

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state),
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
