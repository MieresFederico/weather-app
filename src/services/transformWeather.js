import convert from "convert-units";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../constants/weathers";

const getTemp = (kelvin) =>
  Number(convert(kelvin).from("K").to("C").toFixed(0));

const getWeatherState = (weather) => {
  const { id } = weather;
  if (id < 300) {
    return THUNDER;
  }
  if (id < 400) {
    return DRIZZLE;
  }
  if (id < 600) {
    return RAIN;
  }
  if (id < 700) {
    return SNOW;
  }
  if (id === 800) {
    return SUN;
  }
  return CLOUD;
};

const transformWeather = (weatherData) => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  const temperature = getTemp(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };

  return data;
};

export default transformWeather;
