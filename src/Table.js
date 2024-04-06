import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Table({ car }) {
  const navigate = useNavigate();
  const currDate = new Date();
  const allCars = JSON.parse(localStorage.getItem("cars"));

  let difference =
    (Math.floor((currDate.getTime() - new Date(allCars[car].date).getTime()) / (1000 * 60 * 60)) / 4) * 20;
  if (difference === 0) {
    difference = 10;
  }

  let calculatedDate = new Date(allCars[car].date).toLocaleDateString();
  let calculatedTime = new Date(allCars[car].date).toLocaleTimeString();

  function removeCar() {
    const newCars = [];
    for (let i = 0; i < allCars.length; i++) {
      if (allCars[i].number !== allCars[car].number) {
        newCars.push(allCars[i]);
      }
    }
    localStorage.setItem("cars", JSON.stringify(newCars));
    navigate("/");
  }

  function removeDialog() {
    Swal.fire({
      title: "آیا مطمئن هستید موتر شماره " + allCars[car].number + " را خارج نمایید",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "بلی",
      denyButtonText: "نخیر",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        removeCar();
        Swal.fire("موفقانه خارج شد", "", "success");
      } else if (result.isDenied) {
        Swal.fire("موتر خارج نشد", "", "info");
      }
    });
  }

  return (
    <tr>
      <td className="countNum">{allCars[car].number}</td>
      <td>{allCars[car].kind}</td>
      <td>{allCars[car].color}</td>
      <td>{allCars[car].numberpalet}</td>
      <td className="carTime">{calculatedDate + " / " + calculatedTime}</td>
      <td>{difference}</td>
      <td>
        <button className="table_exit_button" onClick={removeDialog}>
          خارج کردن
        </button>
      </td>
    </tr>
  );
}

export default Table;
