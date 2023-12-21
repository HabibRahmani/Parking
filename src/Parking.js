import ParkCell from "./ParkCell";
import { useContext } from "react";
import { LoginContext } from "./App";
if (localStorage.getItem("cars") === null) {
  localStorage.setItem("cars", JSON.stringify([]));
}

export default function Parking() {
  const { submet, setSubmet } = useContext(LoginContext);

  if (submet) {
    setSubmet(false);
    ArrivedCars();
  }
  return (
    <div className="parking-street">
      <div className="left-sub-streets">
        <ParkCell kind={"hangedcell"} start={0} />
        <SubStreet />
        <ParkCell kind={""} start={10} />
        <ParkCell kind={"hangedcell"} start={20} />
        <SubStreet />
        <ParkCell start={30} />
      </div>
      <MainStreet />
      <div className="right-sub-streets">
        <ParkCell kind={"hangedcell"} start={5} />
        <SubStreet />
        <ParkCell start={15} />
        <ParkCell kind={"hangedcell"} start={25} />
        <SubStreet />
        <ParkCell start={35} />
      </div>
    </div>
  );
}

function MainStreet() {
  return (
    <div className="main-street">
      <div className="street-line-parent">
        <div className="street-line"></div>
      </div>
    </div>
  );
}
function SubStreet() {
  return (
    <div className="sub-street">
      <div className="sub-street-line-parent">
        <div className="sub-street-line"></div>
      </div>
    </div>
  );
}

function ArrivedCars() {
  let addedCars = JSON.parse(localStorage.getItem("cars"));
  const { kind, color, numberpalet, number } = useContext(LoginContext);
  let newCars = {
    kind: kind,
    color: color,
    numberpalet: numberpalet,
    number: number,
    id: number,
    date: new Date(),
  };

  addedCars.push(newCars);
  localStorage.setItem("cars", JSON.stringify(addedCars));
}
