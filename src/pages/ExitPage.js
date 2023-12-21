import { useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "../Table";
import Filter from "../Filter";

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

  const [userNum, setUserNum] = useState();
  const [checked, setChecked] = useState(false);

  let car = -1;
  // ##############
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
                    <th>خارج کردن</th>
                  </tr>
                </thead>
                <tbody>
                  {checked ? (
                    <Filter userNum={userNum} />
                  ) : (
                    allCars.map(() => {
                      car++;
                      return <Table car={car} />;
                    })
                  )}
                </tbody>
              </table>
            </section>
            <form>
              <div className="sendContainer">
                <div>
                  <label htmlFor="number">جستجو...</label>
                  <div>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      onChange={(event) => {
                        console.log(event.target.value);

                        if (event.target.value === "") {
                          setChecked(false);
                          return;
                        } else if (event.target.value > 0) {
                          for (let i = 0; i < allCars.length; i++) {
                            setChecked(true);
                            setUserNum(event.target.value);
                            return;
                          }
                        } else if (event.target.value <= 0) {
                          alert("اعداد وارد شده باید بزرگتر از 0 باشند!!!");
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
