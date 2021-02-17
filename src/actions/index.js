import TransformForecast from "../services/transformForecast";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";
import transformWeather from "../services/transformWeather";
import { API_KEY, URI_BASE_FORECAST } from "../constants/api_url";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = (payload) => (dispatch, getState) => {
  const urlForecast = `${URI_BASE_FORECAST}?q=${payload}&appid=${API_KEY}`;
  dispatch(setCity(payload));

  const state = getState();
  const date = state.cities[payload] && state.cities[payload].forecastDataDate;

  const now = new Date();

  if (date && now - date < 1 * 60 * 1000) {
    return;
  }

  fetch(urlForecast)
    .then((data) => data.json())
    .then((weatherData) => {
      const forecastData = TransformForecast(weatherData);
      dispatch(setForecastData({ city: payload, forecastData }));
    });
};

export const setWeather = (payload) => (dispatch) => {
  payload.forEach((city) => {
    dispatch(getWeatherCity(city));

    const apiWeather = getUrlWeatherByCity(city);

    fetch(apiWeather)
      .then((resolve) => resolve.json())
      .then((weatherData) => {
        const weather = transformWeather(weatherData);

        dispatch(setWeatherCity({ city, weather }));
      });
  });
};
