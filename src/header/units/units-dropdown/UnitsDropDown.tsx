import "./UnitsDropDown.scss";
import { getUnit } from "../../../functions/Functions";
import { useDataUnit } from "../../../store/useStore";

export default function UnitsDropDown() {
  const uptadeFullUnit = useDataUnit((state) => state.uptadeFullUnit);
  const uptadeTempUnit = useDataUnit((state) => state.uptadeTempUnit);
  const uptadeWindSpeedUnit = useDataUnit((state) => state.uptadeWindSpeedUnit);
  const uptadePrecipotationUnit = useDataUnit(
    (state) => state.uptadePrecipotationUnit,
  );

  const temperature_unit = useDataUnit((state) => state.temperature_unit);
  const wind_speed_unit = useDataUnit((state) => state.wind_speed_unit);
  const precipitation_unit = useDataUnit((state) => state.precipitation_unit);

  return (
    <div className="units_dropdown">
      <div
        className="units_dropdown_title"
        onClick={(e) => getUnit(e, uptadeFullUnit)}
      >
        Switch to{" "}
        {temperature_unit === "celsius" &&
        wind_speed_unit === "kmh" &&
        precipitation_unit === "mm"
          ? "Imperial"
          : "Metric"}
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Temperature</span>
        <div
          className={`units_dropdown_options_item ${temperature_unit === "celsius" ? "active_unit" : ""}`}
          onClick={(e) => getUnit(e, uptadeTempUnit)}
        >
          Celsius (°C)
        </div>
        <div
          className={`units_dropdown_options_item ${temperature_unit === "fahrenheit" ? "active_unit" : ""}`}
          onClick={(e) => getUnit(e, uptadeTempUnit)}
        >
          Fahrenheit (°F)
        </div>
        <hr className="options_border" />
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Wind Speed</span>
        <div
          className={`units_dropdown_options_item ${wind_speed_unit === "kmh" ? "active_unit" : ""}`}
          onClick={(e) => getUnit(e, uptadeWindSpeedUnit)}
        >
          km/h
        </div>
        <div
          className={`units_dropdown_options_item ${wind_speed_unit === "mph" ? "active_unit" : ""}`}
          onClick={(e) => getUnit(e, uptadeWindSpeedUnit)}
        >
          mp/h
        </div>
        <hr className="options_border" />
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Precipitation</span>
        <div
          className={`units_dropdown_options_item ${precipitation_unit === "mm" ? "active_unit" : null}`}
          onClick={(e) => getUnit(e, uptadePrecipotationUnit)}
        >
          Millimeters (mm)
        </div>
        <div
          className={`units_dropdown_options_item ${precipitation_unit === "inch" ? "active_unit" : ""}`}
          onClick={(e) => getUnit(e, uptadePrecipotationUnit)}
        >
          Inch (in)
        </div>
      </div>
    </div>
  );
}
