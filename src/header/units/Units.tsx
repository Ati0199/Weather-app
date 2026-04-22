import { useUnitClick } from "../../store/useStore";
import "./Units.scss";

import UnitsDropDown from "./units-dropdown/UnitsDropDown";
export default function Units() {
  const click = useUnitClick((state) => state.click);
  const uptadeClick = useUnitClick((state) => state.uptadeClick);

  return (
    <div className="units_block" onClick={uptadeClick}>
      <div className="units">
        <img src="../../../assets/images/icon-units.svg" alt="" />
        <span className="units_title">Units</span>
        <img src="../../../assets/images/icon-dropdown.svg" alt="" />
      </div>
      {click ? <UnitsDropDown /> : null}
    </div>
  );
}
