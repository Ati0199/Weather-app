import { create } from "zustand";
import { type IWeatherData } from "../App";

import { getWeek } from "../functions/Functions";
import { type IUnits } from "../types";

interface IUseClick {
  click: boolean;
  updateClick: () => void;
}

interface IUseWeatherData {
  data: IWeatherData;
  updateWeatherDate: (data: IWeatherData) => void;
}

export const useUnitClick = create<IUseClick>((set) => ({
  click: false,
  updateClick: () => set((state) => ({ click: !state.click })),
}));
export const useDayClick = create<IUseClick>((set) => ({
  click: false,
  updateClick: () => set((state) => ({ click: !state.click })),
}));

export const useWeatherDateState = create<IUseWeatherData>((set) => ({
  data: {
    currentWeather: null,
    dailyWeather: null,
    hourlyWeather: null,
  },
  updateWeatherDate: (data: IWeatherData) => set(() => ({ data })),
}));

interface IUseGetHourlyDayOfWeak {
  day: string;
  updateDayOfWeek: (day: string) => void;
}

export const useGetHourlyDayOfWeek = create<IUseGetHourlyDayOfWeak>((set) => ({
  day: getWeek(new Date().getDay()),
  updateDayOfWeek: (day: string) => set(() => ({ day })),
}));

export const useDataUnit = create<IUnits>((set) => ({
  temperature_unit: "celsius",
  wind_speed_unit: "kmh",
  precipitation_unit: "mm",
  uptadeFullUnit: (
    temperature_unit: IUnits["temperature_unit"],
    wind_speed_unit: IUnits["wind_speed_unit"],
    precipitation_unit: IUnits["precipitation_unit"],
  ) => set(() => ({ temperature_unit, wind_speed_unit, precipitation_unit })),
  uptadeTempUnit: (temperature_unit: IUnits["temperature_unit"]) =>
    set(() => ({ temperature_unit })),
  uptadeWindSpeedUnit: (wind_speed_unit: IUnits["wind_speed_unit"]) =>
    set(() => ({ wind_speed_unit })),
  uptadePrecipitationUnit: (precipitation_unit: IUnits["precipitation_unit"]) =>
    set(() => ({ precipitation_unit })),
}));

interface IUseServiceHook {
  loading: boolean;
  error: string;
  updateLoading: (loading: boolean) => void;
  updateError: (error: string) => void;
}

export const useServiceHook = create<IUseServiceHook>((set) => ({
  loading: false,
  error: "",
  updateLoading: (loading: boolean) => set(() => ({ loading })),
  updateError: (error: string) => set(() => ({ error })),
}));
