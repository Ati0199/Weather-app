import "./UnitsDropDown.scss";
import { getUnit } from "../../../functions/Functions";
import { useDataUnit } from "../../../store/useStore";

export default function UnitsDropDown() {
  const uptadeUnit = useDataUnit((state) => state.uptadeUnit);
  console.log(useDataUnit((state) => state.temperature_unit));

  return (
    <div className="units_dropdown">
      <div
        className="units_dropdown_title"
        onClick={(e) => getUnit(e, uptadeUnit)}
      >
        Switch to Imperial
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Temperature</span>
        <div className="units_dropdown_options_item">Celsius (°C)</div>
        <div className="units_dropdown_options_item">Fahrenheit (°F)</div>
        <hr className="options_border" />
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Wind Speed</span>
        <div className="units_dropdown_options_item">km/h</div>
        <div className="units_dropdown_options_item">mp/h</div>
        <hr className="options_border" />
      </div>
      <div className="units_dropdown_options">
        <span className="units_dropdown_options_title">Precipitation</span>
        <div className="units_dropdown_options_item">Millimeters (mm)</div>
        <div className="units_dropdown_options_item">Inch (in)</div>
      </div>
    </div>
  );
}
