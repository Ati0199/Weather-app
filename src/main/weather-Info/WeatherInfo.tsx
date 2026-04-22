// Functions
import { getWeek } from "../../functions/Functions.tsx";
import { getMonth } from "../../functions/Functions.tsx";
import { weatherCodeImage } from "../../functions/Functions.tsx";

import { useWeatherDateState } from "../../store/useStore.tsx";

import "./WeatherInfo.scss";
interface IProps {
  loading: boolean;
}

export default function WeatherInfo({ loading }: IProps) {
  const weatherData = useWeatherDateState((state) => state.data);

  const month = new Date(
    weatherData.currentWeather?.current.time as string,
  ).getMonth();
  const week = new Date(
    weatherData.currentWeather?.current.time as string,
  ).getDay();

  const fullYear = new Date(
    weatherData.currentWeather?.current.time as string,
  ).getFullYear();
  const day = new Date(
    weatherData.currentWeather?.current.time as string,
  ).getDate();

  if (!weatherData.currentWeather?.current.weather_code) return;
  return (
    <>
      {loading ? (
        <div style={{ color: "#fff" }}>loading</div>
      ) : (
        <div className="weather_info">
          <div className="location_info">
            <h2 className="location">
              {weatherData?.currentWeather?.timezone.replace("/", ", ")}
            </h2>
            <p className="date">{`${getWeek(week)}, ${getMonth(month)} ${day}, ${fullYear}`}</p>
          </div>
          <div className="weather_temperature">
            {weatherCodeImage(
              weatherData.currentWeather?.current.weather_code,
              "weather_temperature_icon",
            )}
            <span className="weather_temperature_title">
              {weatherData.currentWeather?.current.temperature_2m}
              {weatherData.currentWeather.current_units.temperature_2m}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
