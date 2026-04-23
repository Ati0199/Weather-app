import "./DailyForecastCard.scss";
import { getWeek } from "../../../functions/Functions";
import { weatherCodeImage } from "../../../functions/Functions";
import { useServiceHook, useWeatherDateState } from "../../../store/useStore";
import { v4 as uuidv4 } from "uuid";

export default function DailyForecastCard({}) {
  const loading = useServiceHook((state) => state.loading);

  const time = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily.time as string[],
  );

  const temperature_2m_min = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily.temperature_2m_min as number[],
  );
  const temperature_2m_max = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily.temperature_2m_max as number[],
  );
  const weather_code = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily.weather_code,
  );
  const unitsTempMax = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily_units.temperature_2m_max,
  ) as string;
  const unitsTempMin = useWeatherDateState(
    (state) => state.data.dailyWeather?.daily_units.temperature_2m_min,
  ) as string;

  return (
    <>
      {weather_code?.map((item, i) => {
        return (
          <div key={uuidv4()}>
            {loading ? (
              <div className="daily_forecast_card_skeleton"></div>
            ) : (
              <div className="daily_forecast_card">
                <span className="daily_title">
                  {getWeek(Number(new Date(time[i]).getDay()))?.slice(0, 3)}
                </span>
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
