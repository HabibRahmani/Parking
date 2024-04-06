import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Car1 from "../random-cars-images/car-random-1.jpg";
import Car2 from "../random-cars-images/car-random-2.jpg";
import Car3 from "../random-cars-images/car-random-3.jpg";
import { LoginContext } from "../App";

let cars = [Car1, Car2, Car3];

function LoginPage() {
  let { setKind, setColor, setNumberpalet, setNumber, setSubmet,doorWay,updateDoorWay } =
    useContext(LoginContext);

  let [randomNum, setRandomNum] = useState("");
  function showCar() {
    setRandomNum(Math.floor(Math.random() * 3));
  }

  const navigate = useNavigate();

  const [kindValue, setKindValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [numberpaletValue, setNumberpaletValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e) {
    const allCars = JSON.parse(localStorage.getItem("cars"));
    e.preventDefault();

    for (let i = 0; i < allCars.length; i++) {
      if (JSON.parse(allCars[i].number) === JSON.parse(numberValue)) {
        alert("به این نمبر موتر موجود است!");
        return;
      }
    }
    if (
      kindValue.length === 0 ||
      colorValue.length === 0 ||
      numberpaletValue.length === 0 ||
      numberValue.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      navigate("/");
      setSubmet(true);
    }
  }

  return (
    <div className="login-container">
      <div className="main-login"></div>
      <div className="login-list-parent">
        <div className="back-div">
          <nav className="back">
            <ul style={{display: 'flex'}}>
              <li>
                <NavLink to="/">برگشت</NavLink>
              </li>
              <li style={{textWrap: "nowrap"}}>
               <a href="#" onClick={updateDoorWay}>{doorWay ? 'بستن راهبند': 'باز کردن راهبند'}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cars-img-parent">
          <div className="cars-img">
            <div className="cars-img-button">
              <button onClick={showCar}>...گرفتن عکس</button>

              <div className="car-random-parent">
                {randomNum >= 0 && randomNum <= cars.length ? (
                  <img className="car-random" src={cars[randomNum]} alt="" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="login-list">
          <h1 className="login-list-title">خوش آمدید به پارکنگ</h1>
          <form onSubmit={submit}>
            <div className="login-list-kind">
              <label htmlFor="kind">مدل موتر</label>
              <div>
                <input
                  onChange={(event) => {
                    setKind(event.target.value);
                    setKindValue(event.target.value);
                  }}
                  type="text"
                  name="kind"
                  id="kind"
                />
              </div>
            </div>
            <div>
              <label htmlFor="color">رنگ موتر</label>
              <div>
                <input
                  onChange={(event) => {
                    setColor(event.target.value);
                    setColorValue(event.target.value);
                  }}
                  type="text"
                  name="color"
                  id="color"
                />
              </div>
            </div>

            <div>
              <label htmlFor="numberpalet">نمبر پلیت</label>
              <div>
                <input
                  onChange={(event) => {
                    setNumberpalet(event.target.value);
                    setNumberpaletValue(event.target.value);
                  }}
                  type="text"
                  name="numberpalet"
                  id="numberpalet"
                />
              </div>
            </div>
            <div>
              <label htmlFor="number">نمبر</label>
              <div>
                <input
                  id="number"
                  name="number"
                  onChange={(event) => {
                    setNumber(event.target.value);
                    setNumberValue(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              {error ? (
                <p className="input-error">خانه خالی ها را پر کنید!</p>
              ) : (
                ""
              )}
            </div>
            <div className="login-list-button">
              <button>ارسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
