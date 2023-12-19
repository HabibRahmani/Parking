import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import ExitPage from "./pages/ExitPage";

export const LoginContext = createContext();

function App() {
  let [kind, setKind] = useState("");
  let [color, setColor] = useState("");
  let [numberpalet, setNumberpalet] = useState("");
  let [number, setNumber] = useState(1);
  let [submet, setSubmet] = useState(false);

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
