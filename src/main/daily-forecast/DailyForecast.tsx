import type { IWeatherData } from "../../App";
import "./DailyForecast.scss";
import DailyForecastCard from "./daily-forecast-card/DailyForecastCard";
import { useWeatherDateState } from "../../store/useStore";

export default function DailyForecast() {
  const dailyWeather = useWeatherDateState((state) => state.data.dailyWeather);
  return (
    <div className="daily_forecast">
      <h2 className="daily_forecast_title">Daily forecast</h2>
      <div className="daily_forecast_cards">
        {dailyWeather?.daily.weather_code.map((item, i) => {
          return (
            <DailyForecastCard
              key={i}
              time={dailyWeather.daily.time[i]}
              weather_code={item}
              temperature_2m_max={dailyWeather.daily.temperature_2m_max[i]}
              temperature_2m_min={dailyWeather.daily.temperature_2m_min[i]}
              units={dailyWeather.daily_units}
            />
          );
        })}
      </div>
    </div>
  );
}
