// Functions
import { getWeek } from "../../functions/Functions.tsx";
import { getMonth } from "../../functions/Functions.tsx";
import { weatherCodeImage } from "../../functions/Functions.tsx";

import { useWeatherDateState } from "../../store/useStore.tsx";

import "./WeatherInfo.scss";

export default function WeatherInfo() {
  const weatherData = useWeatherDateState((state) => state.data);
  if (!weatherData.currentWeather) return <div>loading</div>;
  const data = new Date(weatherData.currentWeather.current.time);
  const month = data.getMonth();
  const week = data.getDay();
  const fullYear = data.getFullYear();
  const day = data.getDate();
  return (
    <div className="weather_info">
      <div className="location_info">
        <h2 className="location">
          {weatherData.currentWeather.timezone.replaceAll("/", ", ")}
        </h2>
        <p className="date">{`${getWeek(week)}, ${getMonth(month)} ${day}, ${fullYear}`}</p>
      </div>
      <div className="weather_temperature">
        {weatherCodeImage(
          weatherData.currentWeather.current.weather_code,
          "weather_temperature_icon",
        )}
        <span className="weather_temperature_title">
          {weatherData.currentWeather.current.temperature_2m}
          {weatherData.currentWeather.current_units.temperature_2m}
        </span>
      </div>
    </div>
  );
}
