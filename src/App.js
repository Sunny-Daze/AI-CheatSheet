import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

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

  const styles = {
    fadeIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  return (
    <>
      <StyleRoot>
        <div style={styles.fadeIn}>
          <Header mode={mode} toggle={toggle} />
        </div>
        <Body mode={mode} />
        <div style={styles.fadeIn}>
          <Footer mode={mode} />
        </div>
      </StyleRoot>
    </>
  );
}

export default App;
