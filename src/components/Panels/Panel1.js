import React from "react";
import "./Panel.css";
import program1 from "../files/program1.py";


import { bounceIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Panel1(props) {
   const styles = {
    bounceIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounceIn, "bounceIn"),
    }
    }
  return (
    <>
      <div
        className="card text-white mb-3 panel1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          "max-width": "18rem",
          backgroundColor: `${props.mode === "light" ? "#0d6efd" : "#011627"}`,
          borderColor: `${props.mode === "light" ? "#0d6efd" : "white"}`,
        }}
      >
        <div
          className="card-header"
          style={{
            borderBottomColor: `${
              props.mode === "light" ? "#0d6efd" : "white"
            }`,
          }}
        >
          Program 1
        </div>
        <div className="card-body">
          <h5 className="card-title">Linear Regression</h5>
          <p className="card-text"></p>
        </div>
      </div>
      <StyleRoot>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={styles.bounceIn}
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div
              className="modal-content"
              style={{
                backgroundColor: `${
                  props.mode === "light" ? "white" : "#011627"
                }`,
                color: `${props.mode === "light" ? "black" : "white"}`,
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  BFS and DFS
                </h5>
                <button
                  type="button"
                  className="btn-close  btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" id="panel1">
                <h5>
                  Click on the download button to download the program.
                  <br />
                  <br />
                  <br />
                  Good Luck!
                </h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary bg-danger"
                  data-bs-dismiss="modal"
                  style={{
                    borderColor: `${
                      props.mode === "light" ? "white" : "white"
                    }`,
                  }}
                >
                  Close
                </button>
                <a href={program1} download="bfs||dfs.py">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: `${
                        props.mode === "light" ? "#0d6efd" : "#011627"
                      }`,
                      borderColor: `${
                        props.mode === "light" ? "#0d6efd" : "white"
                      }`,
                    }}
                  >
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyleRoot>
    </>
  );
}

export default Panel1;
