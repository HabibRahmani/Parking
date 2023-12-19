import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ExitPage() {
  return (
    <div>
      <List />
    </div>
  );
}

export default ExitPage;

function List() {
  const allCars = JSON.parse(localStorage.getItem("cars"));

  const [userNum, setUserNum] = useState("0");
  const [checked, setChecked] = useState(false);

  // #################
  const navigate = useNavigate();

  function submit(e) {
    console.log(userNum);
    e.preventDefault();
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].number === JSON.parse(userNum)) {
        setChecked(true);
        return;
      }
    }
    if (userNum === "0") {
      alert("لطفا نمبر کارت خود را وارد نمایید!");
    } else {
      alert("به این شماره موتر موجود نیست!");
    }
  }

  function takeSubmit(e) {
    e.preventDefault();
    const newCars = [];
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].number !== JSON.parse(userNum)) {
        newCars.push(allCars[i]);
      }
      localStorage.setItem("cars", JSON.stringify(newCars));
      navigate("/");
    }
  }

  // ##############

  let amount = 0;
  return (
    <div className="exit-container">
      <div className="exit-page">
        <div className="reportContainer">
          <main className="table">
            <section className="table__header">
              <div className="table__header_title">
                <h1>لیست موتر های وارد شده</h1>
              </div>
              <div className="back-div">
                <nav className="back">
                  <ul>
                    <li>
                      <NavLink to="/">برگشت</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
            <section className="table__body">
              <table>
                <thead>
                  <tr>
                    <th>شماره</th>
                    <th>مدل موتر</th>
                    <th>رنگ موتر</th>
                    <th>نمبر پلیت</th>
                    <th>زمان ورود</th>
                    <th>قیمت</th>
                  </tr>
                </thead>
                <tbody>
                  {allCars.map((car) => {
                    const currDate = new Date();

                    let difference =
                      (Math.floor(
                        (currDate.getTime() - new Date(car.date).getTime()) /
                          (1000 * 60 * 60)
                      ) /
                        4) *
                      20;
                    if (difference === 0) {
                      difference = 10;
                    }

                    let calculatedDate = new Date(
                      car.date
                    ).toLocaleDateString();
                    let calculatedTime = new Date(
                      car.date
                    ).toLocaleTimeString();

                    amount++;
                    return (
                      <tr>
                        <td className="countNum">{amount}</td>
                        <td>{car.kind}</td>
                        <td>{car.color}</td>
                        <td>{car.numberpalet}</td>
                        <td className="carTime">
                          {calculatedDate + " / " + calculatedTime}
                        </td>
                        <td>{difference}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
            <form>
              <div className="sendContainer">
                <div>
                  <label htmlFor="number">نمبر کارت</label>
                  <div>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      onChange={(event) => {
                        setUserNum(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="exit-list-button">
                  {checked ? (
                    <button onClick={takeSubmit}>خارج کردن</button>
                  ) : (
                    <button onClick={submit}>بررسی</button>
                  )}
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
