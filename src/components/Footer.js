import React from "react";

function Footer(props) {
  return (
    <footer
      class="page-footer font-small fixed-bottom"
      style={{
        backgroundColor: `${props.mode === "light" ? "#0d6efd" : "#011627"}`,
        color: "white",
      }}
    >
      <div class="footer-copyright text-center py-3">
        © 2022 Copyright: KT Boyz
      </div>
    </footer>
  );
}

export default Footer;
