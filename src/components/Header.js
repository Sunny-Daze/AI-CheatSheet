import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <>
      <nav
        className={`navbar navbar-${props.mode} custom-nav`}
        style={{
          backgroundColor: `${props.mode === "light" ? "#0d6efd" : "#011627"}`,
        }}
      >
        <div className="container-fluid flex-center custom-flex">
          <img
            src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top logo"
          />

          <a className="navbar-brand" href="/">
            <div className="logo-name">Microsoft</div>
          </a>

          <div className="form-check form-switch custom-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggle}
            />
            <label
              className="form-check-label custom-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`Enable ${props.mode === "light" ? "Dark" : "Light"} Mode`}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
