import HourlyForecastCardSkeleton from "../hourly-forecast-card-skeleton/HourlyForecastCardSkeleton";
import dropdown from "../../assets/images/icon-dropdown.svg";
export default function HourlyForecastSkeleton() {
  return (
    <div className="hourly_forecast">
      <div className="hourly_forecast_header">
        <h2 className="hourly_forecast_title">Hourly forecast</h2>
        <div className="hourly_forecast_dropdown">
          <span className="hourly_forecast_day">-</span>
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="hourly_forecast_cards">
        <HourlyForecastCardSkeleton />
      </div>
    </div>
  );
}
