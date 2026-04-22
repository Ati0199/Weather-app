import useHttp from "../hooks/http.hook.ts";

//  types
import { type ICurentWeather } from "../types.ts";
import { type IDailyWeather } from "../types.ts";
import { type IHourlyWeather } from "../types.ts";
// 41.6941 44.8337 tbilisi

export default function useService() {
  const { error, loading, clearError, request } = useHttp();

  const URL = "https://api.open-meteo.com/v1/forecast";

  const PARAMS =
    "timezone=auto&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,apparent_temperature,wind_speed_10m&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code";
  // const WIND_SPEED_UNIT = "wind_speed_unit=mph";
  // const TEMPERTURE_UNIT = "temperature_unit=fahrenheit";
  // const PRECIPITATION_UNIT = "precipitation_unit=inch";
  // "&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"

  const getWeather = async (
    latitude: number,
    longitude: number,
    TEMPERTURE_UNIT: "temperature_unit=celsius" | "temperature_unit=fahrenheit",
    WIND_SPEED_UNIT: "wind_speed_unit=kmh" | "wind_speed_unit=mph",
    PRECIPITATION_UNIT: "precipitation_unit=inch" | "precipitation_unit=mm",
  ) => {
    const res = await request(
      `${URL}?latitude=${latitude}&longitude=${longitude}&${PARAMS}&${TEMPERTURE_UNIT}&${WIND_SPEED_UNIT}&${PRECIPITATION_UNIT}`,
    );
    const getCurentWeather = () => {
      return transforomCurentWeather(res);
    };
    const getDailyWeather = () => {
      return transformDailyWeather(res);
    };
    const getHourlyWeather = () => {
      return transformHourlyWeather(res);
    };

    return {
      currentWeather: getCurentWeather(),
      dailyWeather: getDailyWeather(),
      hourlyWeather: getHourlyWeather(),
    };
  };

  return { getWeather, error, loading, clearError, request };

  function transforomCurentWeather(data: ICurentWeather) {
    return {
      timezone: data.timezone,
      current: {
        apparent_temperature: data.current.apparent_temperature,
        precipitation: data.current.precipitation,
        temperature_2m: data.current.temperature_2m,
        time: data.current.time,
        weather_code: data.current.weather_code,
        relative_humidity_2m: data.current.relative_humidity_2m,
        wind_speed_10m: data.current.wind_speed_10m,
      },
      current_units: {
        relative_humidity_2m: data.current_units.relative_humidity_2m,
        temperature_2m: data.current_units.temperature_2m,
        precipitation: data.current_units.precipitation,
        wind_speed_10m: data.current_units.wind_speed_10m,
      },
    };
  }
  function transformDailyWeather(data: IDailyWeather) {
    return {
      daily: {
        temperature_2m_max: data.daily.temperature_2m_max,
        temperature_2m_min: data.daily.temperature_2m_min,
        time: data.daily.time,
        weather_code: data.daily.weather_code,
      },
      daily_units: {
        temperature_2m_max: data.daily_units.temperature_2m_max,
        temperature_2m_min: data.daily_units.temperature_2m_min,
      },
    };
  }
  function transformHourlyWeather(data: IHourlyWeather) {
    return {
      hourly: {
        temperature_2m: data.hourly.temperature_2m,
        time: data.hourly.time,
        weather_code: data.hourly.weather_code,
      },
      hourly_units: {
        temperature_2m: data.hourly_units.temperature_2m,
      },
    };
  }
}

// const getCurentWeather = async <T extends string>(
//   TEMPERTURE_UNIT: T,
//   WIND_SPEED_UNIT: T,
//   PRECIPITATION_UNIT: T,
// ) => {};
