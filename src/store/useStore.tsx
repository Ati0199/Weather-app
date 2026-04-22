import { create } from "zustand";
import { type IWeatherData } from "../App";

import { getWeek } from "../functions/Functions";
import { type IUnits } from "../types";
interface IUseClick {
  click: boolean;
  uptadeClick: () => void;
}

interface IUseWeatherData {
  data: IWeatherData;
  uptadeWeatherDate: (data: any) => void;
}

export const useUnitClick = create<IUseClick>((set) => ({
  click: false,
  uptadeClick: () => set((state) => ({ click: !state.click })),
}));
export const useDayClick = create<IUseClick>((set) => ({
  click: false,
  uptadeClick: () => set((state) => ({ click: !state.click })),
}));

export const useWeatherDateState = create<IUseWeatherData>((set) => ({
  data: {
    currentWeather: null,
    dailyWeather: null,
    hourlyWeather: null,
  },
  uptadeWeatherDate: (data: any) => set(() => ({ data })),
}));

interface IUseGetHourlyDayOfWeak {
  day: string;
  uptadeDayOfWeek: (day: string) => void;
}

export const useGetHourlyDayOfWeak = create<IUseGetHourlyDayOfWeak>((set) => ({
  day: getWeek(new Date().getDay()),
  uptadeDayOfWeek: (day: string) => set(() => ({ day })),
}));

export const useDataUnit = create<IUnits>((set) => ({
  temperature_unit: "celsius",
  wind_speed_unit: "kmh",
  precipitation_unit: "mm",
  uptadeUnit: (
    temperature_unit?: IUnits["temperature_unit"],
    wind_speed_unit?: IUnits["wind_speed_unit"],
    precipitation_unit?: IUnits["precipitation_unit"],
  ) => set(() => ({ temperature_unit, wind_speed_unit, precipitation_unit })),
}));

// const { getWeather, loading } = useService();
// export const useServiceHook = create<IUseServiceHook>((set) => ({
//   getWeather: getWeather,
//   loading: loading,
// }));
