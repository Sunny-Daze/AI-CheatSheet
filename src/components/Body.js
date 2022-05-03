import React from "react";
import "./Body.css";
import Panel1 from "./Panels/Panel1";
import Panel2 from "./Panels/Panel2";
import Panel3 from "./Panels/Panel3";
import Panel4 from "./Panels/Panel4";
import Panel5 from "./Panels/Panel5";
import Panel6 from "./Panels/Panel6";

import { fadeInLeft, fadeInRight, fadeInDown, fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Body(props) {
  const styles = {
    fadeInLeft: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
    },
    fadeInRight: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
    },
    fadeInDown: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
    fadeInUp: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
    }
  };
  return (
    <StyleRoot>
      <div className="container-fluid parent-container">
        <div className="row">
          <div className="col mx-4 my-4" style={styles.fadeInLeft}>
            <Panel1 mode={props.mode} />
          </div>
          <div className="col mx-4 my-4" style={styles.fadeInDown}>
            <Panel2 mode={props.mode} />
          </div>
          <div className="col mx-4 my-4" style={styles.fadeInRight}>
            <Panel3 mode={props.mode} />
          </div>
        </div>
        <div className="row">
          <div className="col mx-4 my-4" style={styles.fadeInLeft}>
            <Panel4 mode={props.mode} />
          </div>
          <div className="col mx-4 my-4" style={styles.fadeInUp}>
            <Panel5 mode={props.mode} />
          </div>
          <div className="col mx-4 my-4" style={styles.fadeInRight}>
            <Panel6 mode={props.mode} />
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Body;
