import type { ReactNode } from "react";
import type { IHourlyWeather } from "../types";

export function getMonth(month: number): string {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 8:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
  }
}
export function getWeek(day: number): string {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}

export function weatherCodeImage(
  weather_code: number | number[] | undefined,
  className: string,
): ReactNode {
  // if (!weather_code) return;
  if (typeof weather_code === "number") {
    if (weather_code === 0)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-sunny.webp"
          alt=""
        />
      );
    if (weather_code > 0 && weather_code < 4)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-partly-cloudy.webp"
          alt=""
        />
      );
    if (weather_code === 45 || weather_code === 48)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-fog.webp"
          alt=""
        />
      );
    if (weather_code === 51 || weather_code === 53 || weather_code === 55)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-drizzle.webp"
          alt=""
        />
      );
    if (weather_code === 56 || weather_code === 57)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-drizzle.webp"
          alt=""
        />
      );
    if (weather_code === 61 || weather_code === 63 || weather_code === 65)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-rain.webp"
          alt=""
        />
      );
    if (weather_code === 66 || weather_code === 67)
      return (
        <img
          className="{className}"
          src="./../../assets/images/icon-rain.webp"
          alt=""
        />
      );
    if (weather_code === 71 || weather_code === 73 || weather_code === 75)
      return (
        <img
          className={className}
          src="./../../assets/images/snow-fall.png"
          alt=""
        />
      );
    if (weather_code === 77)
      return (
        <img
          className={className}
          src="./../../assets/images/icon-snow.webp"
          alt=""
        />
      );
    if (weather_code === 80 || weather_code === 81 || weather_code === 82)
      return (
        <img
          className={className}
          src="./../../assets/images/rain-showers.png"
          alt=""
        />
      );
    if (weather_code === 85 || weather_code === 86)
      return (
        <img
          className={className}
          src="./../../assets/images/rain-showers.png"
          alt=""
        />
      );
    if (weather_code >= 95 || weather_code <= 99)
      return (
        <img
          className={className}
          src="./../../assets/images/thunderstorms.svg"
          alt=""
        />
      );
  } else {
    weather_code?.map((item) => {
      if (item === 0)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-sunny.webp"
            alt=""
          />
        );
      if (item > 0 && item < 4)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-partly-cloudy.webp"
            alt=""
          />
        );
      if (item === 45 || item === 48)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-fog.webp"
            alt=""
          />
        );
      if (item === 51 || item === 53 || item === 55)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-drizzle.webp"
            alt=""
          />
        );
      if (item === 56 || item === 57)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-drizzle.webp"
            alt=""
          />
        );
      if (item === 61 || item === 63 || item === 65)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-rain.webp"
            alt=""
          />
        );
      if (item === 66 || item === 67)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-rain.webp"
            alt=""
          />
        );
      if (item === 71 || item === 73 || item === 75)
        return (
          <img
            className={className}
            src="./../../assets/images/snow-fall.png"
            alt=""
          />
        );
      if (item === 77)
        return (
          <img
            className={className}
            src="./../../assets/images/icon-snow.webp"
            alt=""
          />
        );
      if (item === 80 || item === 81 || item === 82)
        return (
          <img
            className={className}
            src="./../../assets/images/rain-showers.png"
            alt=""
          />
        );
      if (item === 85 || item === 86)
        return (
          <img
            className={className}
            src="./../../assets/images/rain-showers.png"
            alt=""
          />
        );
      if (item >= 95 && item <= 99)
        return (
          <img
            className={className}
            src="./../../assets/images/thunderstorms.svg"
            alt=""
          />
        );
    });
  }
}

export function hourlyInfoGetDay(
  data:
    | IHourlyWeather["hourly"]["temperature_2m"]
    | IHourlyWeather["hourly"]["time"]
    | IHourlyWeather["hourly"]["weather_code"],
): (number[] | string[])[] {
  const res = [];
  for (let i = 0; i <= data.length!; i += 24) {
    res.push(data.slice(i, i + 24));
    if (i === 167) break;
  }
  res.pop();
  return res;
}

export function clock(time: string): string {
  const hours = new Date(time).getHours();
  if (hours >= 1 && hours <= 12) return `${hours}A.M`;
  else if (hours === 0) return `12P.M`;
  else {
    return `${hours % 12}P.M`;
  }
}
export function getUnit(
  e: React.SyntheticEvent<HTMLDivElement>,
  uptadeUnit: Function,
) {
  const unit = e.currentTarget.textContent;
  if (unit.includes("Imperial")) uptadeUnit("fahrenheit", "mph", "inch");
  if (unit.includes("Metric")) uptadeUnit("celsius", "kmh", "mm");
  if (unit.includes("°F")) uptadeUnit("fahrenheit");
  if (unit.includes("°C")) uptadeUnit("celsius");
  if (unit.includes("km/h")) uptadeUnit("kmh");
  if (unit.includes("mp/h")) uptadeUnit("mph");
  if (unit.includes("Millimeters")) uptadeUnit("mm");
  if (unit.includes("Inch")) uptadeUnit("inch");
}
