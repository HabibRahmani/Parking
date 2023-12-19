import List from "./List";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  let amountOfCars = JSON.parse(localStorage.getItem("cars")).length;

  return (
    <div className="buttons">
      <nav className="default-nav">
        <ul>
          <li>
            <NavLink to="login">ورودی</NavLink>
          </li>
          <li>
            <NavLink to="exit">خروجی</NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-buttons">
        <List
          title={"خالی"}
          buttonNum={40 - amountOfCars}
          buttonColor={"greenButton"}
        />
        <List
          title={"پارک"}
          buttonNum={amountOfCars}
          buttonColor={"redButton"}
        />
      </div>
    </div>
  );
}
