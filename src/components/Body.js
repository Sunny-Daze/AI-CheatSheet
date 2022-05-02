import React from "react";
import "./Body.css";
import Panel1 from "./Panels/Panel1";
import Panel2 from "./Panels/Panel2";
import Panel3 from "./Panels/Panel3";
import Panel4 from "./Panels/Panel4";
import Panel5 from "./Panels/Panel5";
import Panel6 from "./Panels/Panel6";

function Body(props) {
  return (
    <div className="container-fluid parent-container">
      <div className="row">
        <div className="col mx-4 my-4">
          <Panel1 mode={props.mode} />
        </div>
        <div className="col mx-4 my-4">
          <Panel2 mode={props.mode} />
        </div>
        <div className="col mx-4 my-4">
          <Panel3 mode={props.mode} />
        </div>
      </div>
      <div className="row">
        <div className="col mx-4 my-4">
          <Panel4 mode={props.mode} />
        </div>
        <div className="col mx-4 my-4">
          <Panel5 mode={props.mode} />
        </div>
        <div className="col mx-4 my-4">
          <Panel6 mode={props.mode} />
        </div>
      </div>
    </div>
  );
}

export default Body;
