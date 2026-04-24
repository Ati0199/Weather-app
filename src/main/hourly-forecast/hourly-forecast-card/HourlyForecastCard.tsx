import "./HourlyForecastCard.scss";
import { v4 as uuidv4 } from "uuid";

import { useServiceHook, useWeatherDateState } from "../../../store/useStore";
import { useGetHourlyDayOfWeak } from "../../../store/useStore";

import { getWeek, hourlyInfoGetDay } from "../../../functions/Functions";
import { weatherCodeImage } from "../../../functions/Functions";
import { clock } from "../../../functions/Functions";

export default function HourlyForecastCard() {
  const loading = useServiceHook((state) => state.loading);

  const hourlyTime: (number[] | string[])[] = hourlyInfoGetDay(
    useWeatherDateState((state) => state.data.hourlyWeather?.hourly.time)!,
  );
  const hourlyWeatherCode = hourlyInfoGetDay(
    useWeatherDateState(
      (state) => state.data.hourlyWeather?.hourly.weather_code,
    )!,
  );
  const hourlyTemp = hourlyInfoGetDay(
    useWeatherDateState(
      (state) => state.data.hourlyWeather?.hourly.temperature_2m,
    )!,
  );

  const day = useGetHourlyDayOfWeak((state) => state.day);
  const dayOfWeek = hourlyTime.map((_, i) =>
    getWeek(new Date(hourlyTime[i][0]).getDay()),
  );
  const index = dayOfWeek.findIndex((item) => item === day);
  console.log("0");

  return (
    <>
      {hourlyTime[index]?.map((item, i) => {
        return (
          <div key={i}>
            {loading ? (
              <div className="hourly_forecast_card pulse"></div>
            ) : (
              <div key={i} className="hourly_forecast_card">
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
