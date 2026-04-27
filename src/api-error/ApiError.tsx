import "./ApiError.scss";
import { useDataUnit, useServiceHook } from "../store/useStore";
import { useState } from "react";
interface IProps {
  getWeather: (
    latitude: number,
    longitude: number,
    TEMPERTURE_UNIT: "temperature_unit=celsius" | "temperature_unit=fahrenheit",
    WIND_SPEED_UNIT: "wind_speed_unit=kmh" | "wind_speed_unit=mph",
    PRECIPITATION_UNIT: "precipitation_unit=inch" | "precipitation_unit=mm",
  ) => Promise<any>;
}

export default function ApiError({ getWeather }: IProps) {
  const [click, setClick] = useState(false);
  const responseStatus = useServiceHook((state) => state.responseStatus);
  const temperature_unit = useDataUnit((state) => state.temperature_unit);
  const wind_speed_unit = useDataUnit((state) => state.wind_speed_unit);
  const precipitation_unit = useDataUnit((state) => state.precipitation_unit);
  return (
    <div className="error_block">
      <img
        className="error_img"
        src="../../assets/images/icon-error.svg"
        alt=""
      />
      <h1 className="title">Something went wrong</h1>
      <p className="error_text">
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        className="error_btn"
        onClick={() => {
          getWeather(
            41.6941,
            44.8337,
            `temperature_unit=${temperature_unit}`,
            `wind_speed_unit=${wind_speed_unit}`,
            `precipitation_unit=${precipitation_unit}`,
          );
          setClick(true);
        }}
      >
        <img
          className={`retry_img ${!responseStatus && click ? "loading_retry" : ""}`}
          src="../../assets/images/icon-retry.svg"
          alt=""
        />
        <span className="retry_title">Retry</span>
      </button>
    </div>
  );
}
