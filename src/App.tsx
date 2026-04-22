import "./App.scss";
import "./normalize.css";
import Logo from "./header/logo/Logo";
import Units from "./header/units/Units";
import Search from "./main/search/Search";
import WeatherInfo from "./main/weather-Info/WeatherInfo";
import HourlyForecast from "./main/hourly-forecast/HourlyForecast";
import WeatherDetails from "./main/weather-details/WeatherDetails";
import DailyForecast from "./main/daily-forecast/DailyForecast";
import useService from "./service/service";
import { useEffect } from "react";

import { useDataUnit } from "./store/useStore";

import { useWeatherDateState } from "./store/useStore";
// import { useServiceHook } from "./store/useStore";

import { type IDailyWeather } from "./types";
import { type IHourlyWeather } from "./types";
import { type ICurentWeather } from "./types";
export interface IWeatherData {
  currentWeather: ICurentWeather | null;
  dailyWeather: IDailyWeather | null;
  hourlyWeather: IHourlyWeather | null;
}
export default function App() {
  const { getWeather, loading } = useService();
  const temperature_unit = useDataUnit((state) => state.temperature_unit);
  const wind_speed_unit = useDataUnit((state) => state.wind_speed_unit);
  const precipitation_unit = useDataUnit((state) => state.precipitation_unit);

  const uptadeWeatherDate = useWeatherDateState(
    (state) => state.uptadeWeatherDate,
  );
  // const [weatherData, setWeatherData] = useState<IWeatherData>({
  //   currentWeather: null,
  //   dailyWeather: null,
  //   hourlyWeather: null,
  // });
  useEffect(() => {
    getWeather(
      41.6941,
      44.8337,
      `temperature_unit=${temperature_unit}`,
      `wind_speed_unit=${wind_speed_unit}`,
      `precipitation_unit=${precipitation_unit}`,
    ).then((data: any) => uptadeWeatherDate(data));
  }, []);

  return (
    <div className="container">
      <header className="header">
        <Logo />
        <Units />
      </header>
      <h1 className="title">How’s the sky looking today?</h1>
      <main>
        <Search getWeather={getWeather} loading={loading} />
        <div className="main_content">
          <div className="left_content">
            <WeatherInfo loading={loading} />
            <WeatherDetails />
            <DailyForecast />
          </div>

          <div className="right_content">
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
}
