import Car1 from "./images/car1.png";
import Car2 from "./images/car2.png";
import Car3 from "./images/car3.png";
const car = [Car1, Car2, Car3];

export default function ParkCell({ kind, start }) {
  return (
    <div className={kind ? kind : "parkcell"}>
      <Cell id={start + 1} kind={kind} />
      <Cell id={start + 2} kind={kind} />
      <Cell id={start + 3} kind={kind} />
      <Cell id={start + 4} kind={kind} />
      <Cell id={start + 5} kind={kind} />
    </div>
  );
}

function Cell({ id, kind }) {
  const addCars = JSON.parse(localStorage.getItem("cars")).length;
  console.log(addCars);
  return (
    <div className={id <= addCars ? "fill" : "cell"}>
      <div>
        {kind ? (
          <>
            {id <= addCars ? (
              <>
                <img
                  className="car-image"
                  src={car[Math.floor(Math.random() * 3)]}
                  alt=""
                />
                <h1>{id}</h1>
              </>
            ) : (
              <h1>{id}</h1>
            )}
          </>
        ) : (
          <>
            {id <= addCars ? (
              <>
                <h1>{id}</h1>
                <img
                  className="car-image"
                  src={car[Math.floor(Math.random() * 3)]}
                  alt=""
                />
              </>
            ) : (
              <h1>{id}</h1>
            )}
          </>
        )}
      </div>
    </div>
  );
}
