import "./DailyForecastCard.scss";
import { getWeek } from "../../../functions/Functions";
import { weatherCodeImage } from "../../../functions/Functions";
interface IProps {
  time: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  units: {
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
}

export default function DailyForecastCard({
  time,
  weather_code,
  temperature_2m_max,
  temperature_2m_min,
  units,
}: IProps) {
  const day = new Date(time).getDay();

  return (
    <div className="daily_forecast_card">
      <span className="daily_title">{getWeek(Number(day))?.slice(0, 3)}</span>
      {weatherCodeImage(weather_code, "daily_icon")}
      <div className="daily_temperature">
        <span className="max_temp">
          {temperature_2m_max}
          {units.temperature_2m_max.slice(0, 1)}
        </span>
        <span className="min_temp">
          {temperature_2m_min}
          {units.temperature_2m_min.slice(0, 1)}
        </span>
      </div>
    </div>
  );
}
