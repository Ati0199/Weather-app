export interface ICurentWeather {
  timezone: string;
  current: {
    apparent_temperature: number;
    precipitation: number;
    relative_humidity_2m: number;
    temperature_2m: string;
    time: string;
    weather_code: number;
    wind_speed_10m: string;
  };
  current_units: {
    relative_humidity_2m: "%";
    temperature_2m: "°C" | "°F";
    precipitation: "mm" | "inch";
    wind_speed_10m: "mp/h" | "km/h";
  };
}
export interface IDailyWeather {
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
  };
  daily_units: {
    temperature_2m_max: "°C" | "°F";
    temperature_2m_min: "°C" | "°F";
  };
}
export interface IHourlyWeather {
  hourly: {
    temperature_2m: number[];
    time: string[];
    weather_code: number[];
  };
  hourly_units: {
    temperature_2m: "°C" | "°F";
  };
}
export interface IUnits {
  temperature_unit: "celsius" | "fahrenheit";
  wind_speed_unit: "mph" | "kmh";
  precipitation_unit: "inch" | "mm";
  uptadeUnit: (
    temperature_unit?: IUnits["temperature_unit"],
    wind_speed_unit?: IUnits["wind_speed_unit"],
    precipitation_unit?: IUnits["precipitation_unit"],
  ) => any;
}
//precipitation_unit
//"inch" | " millimetr"
