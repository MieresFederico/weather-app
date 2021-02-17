import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCitie,
  getWeatherCities as getWeatherCities_,
} from "./cities";
import city from "./city";

export default combineReducers({
  cities,
  city,
});

export const getCity = createSelector(
  (state) => state.city,
  (city_) => city_
);
export const getForecastDataFromCities = createSelector(
  (state) => state.cities,
  getCity,
  _getForecastDataFromCitie
);
export const getWeatherCities = createSelector(
  (state) => state.cities,
  getWeatherCities_
);
