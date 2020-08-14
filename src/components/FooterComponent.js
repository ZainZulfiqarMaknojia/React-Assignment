import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p id="linkColor">
              © Copyright 2020 React Developer Assignment By Zain Zulfiqar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
