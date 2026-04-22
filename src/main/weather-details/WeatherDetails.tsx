import { useWeatherDateState } from "../../store/useStore";
import "./WeatherDetails.scss";

export default function WeatherDetails() {
  const currentWeather = useWeatherDateState(
    (state) => state.data.currentWeather,
  );
  console.log("2");
  return (
    <div className="weather_details">
      <div className="weather_details_card ">
        <h3 className="weather_details_card-label">Feels Like</h3>
        <span className="weather_details_card-value">
          {currentWeather?.current.apparent_temperature}
          {currentWeather?.current_units.temperature_2m}
        </span>
      </div>
      <div className="weather_details_card ">
        <h3 className="weather_details_card-label">Humidity </h3>
        <span className="weather_details_card-value">
          {currentWeather?.current.relative_humidity_2m}
          {currentWeather?.current_units.relative_humidity_2m}
        </span>
      </div>
      <div className="weather_details_card ">
        <h3 className="weather_details_card-label">Wind</h3>
        <span className="weather_details_card-value">
          {currentWeather?.current.wind_speed_10m}
          {currentWeather?.current_units.wind_speed_10m}
        </span>
      </div>
      <div className="weather_details_card ">
        <h3 className="weather_details_card-label">Precipitation</h3>
        <span className="weather_details_card-value">
          {currentWeather?.current.precipitation}
          {currentWeather?.current_units.precipitation}
        </span>
      </div>
    </div>
  );
}
