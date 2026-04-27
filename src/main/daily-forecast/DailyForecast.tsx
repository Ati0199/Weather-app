import { useServiceHook } from "../../store/useStore";
import "./DailyForecast.scss";
import DailyForecastCard from "./daily-forecast-card/DailyForecastCard";
import DailyForecastCardSkeleton from "../../daily-forecast-card-skeleton/DailyForecastCardSkeleton";

export default function DailyForecast() {
  const loading = useServiceHook((state) => state.loading);
  return (
    <div className="daily_forecast">
      <h2 className="daily_forecast_title">Daily forecast</h2>
      <div className="daily_forecast_cards">
        {loading ? <DailyForecastCardSkeleton /> : <DailyForecastCard />}
      </div>
    </div>
  );
}
