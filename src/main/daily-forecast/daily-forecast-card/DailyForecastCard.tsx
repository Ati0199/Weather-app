import "./DailyForecastCard.scss";
import { getWeek } from "../../../functions/Functions";
import { weatherCodeImage } from "../../../functions/Functions";
import { useServiceHook, useWeatherDateState } from "../../../store/useStore";

export default function DailyForecastCard() {
  const loading = useServiceHook((state) => state.loading);

  const data = useWeatherDateState((state) => state.data.dailyWeather);
  if (!data) return <div>Loading</div>;
  const time = data.daily.time;
  if (!Array.isArray(time)) return <div>Loading</div>;

  const temperature_2m_min = data.daily.temperature_2m_min;
  const temperature_2m_max = data.daily.temperature_2m_max;
  const weather_code = data.daily.weather_code;
  const unitsTempMax = data.daily_units.temperature_2m_max;
  const unitsTempMin = data.daily_units.temperature_2m_min;

  function getDayName(dateString: string) {
    return getWeek(Number(new Date(dateString).getDay()))?.slice(0, 3);
  }
  return (
    <>
      {weather_code.map((item, i) => {
        return (
          <div key={i}>
            {loading ? (
              <div className="daily_forecast_card_skeleton pulse"></div>
            ) : (
              <div className="daily_forecast_card">
                <span className="daily_title">{getDayName(time[i])}</span>
                {weatherCodeImage(item, "daily_icon")}
                <div className="daily_temperature">
                  <span className="max_temp">
                    {temperature_2m_max[i]}
                    {unitsTempMax.slice(0, 1)}
                  </span>
                  <span className="min_temp">
                    {temperature_2m_min[i]}
                    {unitsTempMin.slice(0, 1)}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
