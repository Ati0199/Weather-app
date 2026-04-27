import { useState } from "react";
import "./Search.scss";
import { cities } from "../../locations/locations";
import { useWeatherDateState } from "../../store/useStore";
import { useDataUnit } from "../../store/useStore";
import search from "../../../assets/images/icon-search.svg";
interface IProps {
  getWeather: (
    latitude: number,
    longitude: number,
    TEMPERTURE_UNIT: "temperature_unit=celsius" | "temperature_unit=fahrenheit",
    WIND_SPEED_UNIT: "wind_speed_unit=kmh" | "wind_speed_unit=mph",
    PRECIPITATION_UNIT: "precipitation_unit=inch" | "precipitation_unit=mm",
  ) => Promise<any>;
  loading: boolean;
}

export default function Search({ getWeather, loading }: IProps) {
  // const { getWeather } = useServicee();
  const temperature_unit = useDataUnit((state) => state.temperature_unit);
  const wind_speed_unit = useDataUnit((state) => state.wind_speed_unit);
  const precipitation_unit = useDataUnit((state) => state.precipitation_unit);

  const [searchValue, setSearchValue] = useState<string>("");
  const updateWeatherDate = useWeatherDateState(
    (state) => state.updateWeatherDate,
  );

  const [CITIES, setCITIES] = useState<string[]>([]);

  const searchValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase() as keyof typeof cities;
    setSearchValue(value);
    const getLocation = () => {
      const res = Object.keys(cities).filter((item) =>
        item.startsWith(value.toLocaleLowerCase()),
      );

      setCITIES(res);
    };
    getLocation();
  };
  const getCity = async (latitude: number, longitude: number) => {
    const res: any = await getWeather(
      latitude,
      longitude,
      `temperature_unit=${temperature_unit}`,
      `wind_speed_unit=${wind_speed_unit}`,
      `precipitation_unit=${precipitation_unit}`,
    );
    updateWeatherDate(res);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (CITIES.length === 0) {
      return;
    }
    const selectedCity = CITIES[0] as keyof typeof cities;
    getCity(cities[selectedCity].latitude, cities[selectedCity].longitude);
    setSearchValue("");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <img className="search_icon" src={search} alt="search_icon" />
      <input
        onChange={searchValueHandler}
        value={searchValue}
        className="search_input"
        type="text"
        placeholder="Search for a place..."
      />
      <button disabled={loading} className="search_btn" type="submit">
        Search
      </button>

      {searchValue.length > 1 ? (
        <div className="search_dropdown">
          {loading ? (
            <p className="loading">Search in progres</p>
          ) : !CITIES.length ? (
            <div className="loading">Not Found</div>
          ) : (
            CITIES.map((item: string) => (
              <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  setSearchValue("");
                  const target = e.currentTarget.textContent;
                  getCity(
                    cities[target as keyof typeof cities].latitude,
                    cities[target as keyof typeof cities].longitude,
                  );
                }}
                className="city"
                key={item}
              >
                {item}
              </div>
            ))
          )}
        </div>
      ) : null}
    </form>
  );
}

// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(
//     (position: GeolocationPosition) => {
//       const x = position.coords.latitude;
//       const y = position.coords.longitude;
//       console.log(`Latitude: ${x}, Longitude: ${y}`);
//     },
//   );
// }
