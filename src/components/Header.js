import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>
    </>
  );
}
