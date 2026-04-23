import "./DailyForecast.scss";
import DailyForecastCard from "./daily-forecast-card/DailyForecastCard";

export default function DailyForecast() {
  return (
    <div className="daily_forecast">
      <h2 className="daily_forecast_title">Daily forecast</h2>
      <div className="daily_forecast_cards">
        <DailyForecastCard />
      </div>
    </div>
  );
}
