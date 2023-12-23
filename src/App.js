import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import ExitPage from "./pages/ExitPage";
import axios from "axios";
export const LoginContext = createContext();

function App() {
  let [kind, setKind] = useState("");
  let [color, setColor] = useState("");
  let [numberpalet, setNumberpalet] = useState("");
  let [number, setNumber] = useState(1);
  let [submet, setSubmet] = useState(false);
  let [parkedCars,setParkedCars] = useState([]);
  let [doorWay,setDoorWay] = useState(false);
  
  const [intevalVariable, setIntervalVariable] = useState(null);
  useEffect(() => {
    // Axios GET request
    clearInterval(intevalVariable);
    const temp = setInterval(() => {
      axios
        .get("http://localhost:3001/test")
        .then((response) => {
          // Handle successful response
          console.log(response.data)
          setParkedCars(response.data)
        })
        .catch((error) => {
          // Handle error
          console.error("Error fetching data:", error);
        });
    }, 2000);
    setIntervalVariable(temp);
  }, []);

  function updateDoorWay(){
    axios
    .post("http://localhost:3001/setDoorWay?doorWay="+(!doorWay))
    .then((response) => {
      // Handle successful response
      console.log(response.data)
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching data:", error);
    });
    setDoorWay(!doorWay);
  }

  return (
    <LoginContext.Provider
      value={{
        kind,
        setKind,
        color,
        setColor,
        numberpalet,
        setNumberpalet,
        number,
        setNumber,
        submet,
        setSubmet,
        parkedCars,
        doorWay,
        updateDoorWay
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="exit" element={<ExitPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
