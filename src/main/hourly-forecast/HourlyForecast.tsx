import { useDayClick } from "../../store/useStore";
import { useServiceHook } from "../../store/useStore";

import "./HourlyForecast.scss";
import HourlyForecastCard from "./hourly-forecast-card/HourlyForecastCard";
import { hourlyInfoGetDay } from "../../functions/Functions";
import { getWeek } from "../../functions/Functions";

import { useWeatherDateState } from "../../store/useStore";
import { useGetHourlyDayOfWeek } from "../../store/useStore";

export default function HourlyForecast() {
  const loading = useServiceHook((state) => state.loading);

  const currentTime = useWeatherDateState(
    (state) => state.data.currentWeather?.current.time,
  );
  const hourlyWeather = useWeatherDateState(
    (state) => state.data.hourlyWeather,
  );

  const click = useDayClick((state) => state.click);
  const updateClick = useDayClick((state) => state.updateClick);

  const day = useGetHourlyDayOfWeek((state) => state.day);

  const updateDayOfWeek = useGetHourlyDayOfWeek(
    (state) => state.updateDayOfWeek,
  );

  if (!currentTime) return <div>loading</div>;
  const timeInWeek = hourlyInfoGetDay(
    hourlyWeather?.hourly.time as string[],
  ) as string[][];

  return (
    <div className="hourly_forecast">
      <div className="hourly_forecast_header">
        <h2 className="hourly_forecast_title">Hourly forecast</h2>
        <div className="hourly_forecast_dropdown" onClick={updateClick}>
          {loading ? (
            <span className="hourly_forecast_day">-</span>
          ) : (
            <span className="hourly_forecast_day">{day}</span>
          )}
          <img src="../../../assets/images/icon-dropdown.svg" alt="" />
        </div>
        {click ? (
          <div className="days_dropdown">
            {timeInWeek.map((_, i) => {
              return (
                <span
                  key={i}
                  className={`days_dropdown_title ${day === getWeek(i) ? "active" : ""}`}
                  style={day === getWeek(i) ? { pointerEvents: "none" } : {}}
                  onClick={(e: React.SyntheticEvent<HTMLSpanElement>) => {
                    const day = e.currentTarget.textContent;
                    e.currentTarget.classList.add;
                    updateDayOfWeek(day);
                    updateClick();
                  }}
                >
                  {getWeek(i)}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="hourly_forecast_cards">
        <HourlyForecastCard />
      </div>
    </div>
  );
}
