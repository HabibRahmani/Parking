import Sidebar from "../Sidebar";
import Parking from "../Parking";

function DefaultPage() {
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
