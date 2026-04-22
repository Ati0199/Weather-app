import { useDayClick } from "../../store/useStore";

import "./HourlyForecast.scss";
import HourlyForecastCard from "./hourly-forecast-card/HourlyForecastCard";
import { hourlyInfoGetDay } from "../../functions/Functions";
import { getWeek } from "../../functions/Functions";

import { useWeatherDateState } from "../../store/useStore";
import { useGetHourlyDayOfWeak } from "../../store/useStore";

export default function HourlyForecast() {
  const currentTime = useWeatherDateState(
    (state) => state.data.currentWeather?.current.time,
  );
  const hourlyWeather = useWeatherDateState(
    (state) => state.data.hourlyWeather,
  );

  const click = useDayClick((state) => state.click);
  const uptadeClick = useDayClick((state) => state.uptadeClick);

  const day = useGetHourlyDayOfWeak((state) => state.day);

  // const index = useGetHourlyOfWeakIndex((state) => state.index);
  const uptadeDayOfWeek = useGetHourlyDayOfWeak(
    (state) => state.uptadeDayOfWeek,
  );

  console.log(day);
  if (!currentTime) return <div>loading</div>;
  const timeInWeek = hourlyInfoGetDay(
    hourlyWeather?.hourly.time as string[],
  ) as string[][];
  console.log(new Date().getHours());
  console.log(22 % 12);

  // console.log(2);
  return (
    <div className="hourly_forecast">
      <div className="hourly_forecast_header">
        <h2 className="hourly_forecast_title">Hourly forecast</h2>
        <div className="hourly_forecast_dropdown" onClick={uptadeClick}>
          <span className="hourly_forecast_day">{day}</span>
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
                    uptadeDayOfWeek(day);
                    uptadeClick();
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
