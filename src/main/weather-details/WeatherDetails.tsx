import { useServiceHook, useWeatherDateState } from "../../store/useStore";
import "./WeatherDetails.scss";

export default function WeatherDetails() {
  const currentWeather = useWeatherDateState(
    (state) => state.data.currentWeather,
  );
  const loading = useServiceHook((state) => state.loading);

  const details = [
    {
      label: "Feels Like",
      value: "apparent_temperature",
      units: "temperature_2m",
    },
    {
      label: "Humidity",
      value: "relative_humidity_2m",
      units: "relative_humidity_2m",
    },
    { label: "Wind", value: "wind_speed_10m", units: "wind_speed_10m" },
    { label: "Precipitation", value: "precipitation", units: "precipitation" },
  ];
  return (
    <div className="weather_details">
      {details.map((detail) => (
        <div key={detail.label} className="weather_details_card ">
          <h3 className="weather_details_card-label">{detail.label}</h3>
          <span className="weather_details_card-value">
            {loading ? (
              "-"
            ) : (
              <>
                {
                  currentWeather?.current[
                    detail.value as keyof typeof currentWeather.current
                  ]
                }
                {
                  currentWeather?.current_units[
                    detail.units as keyof typeof currentWeather.current_units
                  ]
                }
              </>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
