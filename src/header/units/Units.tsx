import { useUnitClick } from "../../store/useStore";
import "./Units.scss";
import unit from "../../../assets/images/icon-units.svg";
import dropdown from "../../../assets/images/icon-dropdown.svg";

import UnitsDropDown from "./units-dropdown/UnitsDropDown";
export default function Units() {
  const click = useUnitClick((state) => state.click);
  const updateClick = useUnitClick((state) => state.updateClick);

  return (
    <div className="units_block" onClick={updateClick}>
      <div className="units">
        <img src={unit} alt="" />
        <span className="units_title">Units</span>
        <img src={dropdown} alt="" />
      </div>
      {click ? <UnitsDropDown /> : null}
    </div>
  );
}
