import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body"

function App() {
  const [mode, setmode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Header mode={mode} toggle={toggle} />
      <Body />
    </>
  );
}

export default App;
