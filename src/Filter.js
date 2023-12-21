import { useNavigate } from "react-router-dom";

function Filter({ userNum }) {
  const navigate = useNavigate();
  const currDate = new Date();
  const allCars = JSON.parse(localStorage.getItem("cars"));
  let car = -1;
  console.log(userNum + " userNum");

  for (let i = 0; i < allCars.length; i++) {
    if (allCars[i].number === userNum) {
      car = i;
    }
  }

  if (car === -1) {
    return;
  }

  let difference =
    (Math.floor(
      (currDate.getTime() - new Date(allCars[car].date).getTime()) /
        (1000 * 60 * 60)
    ) /
      4) *
    20;
  if (difference === 0) {
    difference = 10;
  }

  let calculatedDate = new Date(allCars[car].date).toLocaleDateString();
  let calculatedTime = new Date(allCars[car].date).toLocaleTimeString();

  return (
    <tr>
      <td className="countNum">{allCars[car].number}</td>
      <td>{allCars[car].kind}</td>
      <td>{allCars[car].color}</td>
      <td>{allCars[car].numberpalet}</td>
      <td className="carTime">{calculatedDate + " / " + calculatedTime}</td>
      <td>{difference}</td>
      <td>
        <button
          className="table_exit_button"
          onClick={() => {
            const newCars = [];
            for (let i = 0; i < allCars.length; i++) {
              if (allCars[i].number !== allCars[car].number) {
                newCars.push(allCars[i]);
              }
            }
            localStorage.setItem("cars", JSON.stringify(newCars));
            navigate("/");
          }}
        >
          خارج کردن
        </button>
      </td>
    </tr>
  );
}

export default Filter;
