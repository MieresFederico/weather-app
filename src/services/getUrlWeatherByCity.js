import { URI_BASE_WEATHER, API_KEY } from "../constants/api_url";

const getUrlWeatherByCity = (city) =>
  `${URI_BASE_WEATHER}?q=${city}&appid=${API_KEY}`;

export default getUrlWeatherByCity;
