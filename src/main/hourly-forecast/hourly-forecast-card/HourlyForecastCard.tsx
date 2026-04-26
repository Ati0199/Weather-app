import "./HourlyForecastCard.scss";

import { useServiceHook, useWeatherDateState } from "../../../store/useStore";
import { useGetHourlyDayOfWeek } from "../../../store/useStore";

import { getWeek, hourlyInfoGetDay } from "../../../functions/Functions";
import { weatherCodeImage } from "../../../functions/Functions";
import { clock } from "../../../functions/Functions";

export default function HourlyForecastCard() {
  const loading = useServiceHook((state) => state.loading);
  const data = useWeatherDateState((state) => state.data.hourlyWeather);
  if (!data) return <div>Loading</div>;
  const hourlyTime: (number[] | string[])[] = hourlyInfoGetDay(
    data.hourly.time,
  );
  const hourlyWeatherCode = hourlyInfoGetDay(data.hourly.weather_code);
  const hourlyTemp = hourlyInfoGetDay(data.hourly.temperature_2m);

  const day = useGetHourlyDayOfWeek((state) => state.day);
  const dayOfWeek = hourlyTime.map((_, i) =>
    getWeek(new Date(hourlyTime[i][0]).getDay()),
  );
  const index = dayOfWeek.findIndex((item) => item === day);

  return (
    <>
      {hourlyTime[index]?.map((item, i) => {
        return (
          <div key={i}>
            {loading ? (
              <div className="hourly_forecast_card pulse"></div>
            ) : (
              <div key={item} className="hourly_forecast_card">
                <div className="hourly_forecast_icon-time">
                  {weatherCodeImage(
                    hourlyWeatherCode[index][i] as number,
                    "hourly_forecast_icon",
                  )}
                  <span className="hourly_forecast_time">
                    {clock(item as string)}
                  </span>
                </div>
                <span className="hourly_forecast_temperature">
                  {hourlyTemp[index][i]}°
                </span>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
