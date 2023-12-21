import Sidebar from "../Sidebar";
import Parking from "../Parking";

function DefaultPage() {
  let addedCars = JSON.parse(localStorage.getItem("cars"));
  console.log(addedCars);
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="parking">
        <Parking />
      </div>
    </div>
  );
}

export default DefaultPage;
