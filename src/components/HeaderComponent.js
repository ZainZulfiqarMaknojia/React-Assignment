import React, { useState } from "react";

import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  const toogleNav = () => {
    handleNav(!isNavOpen);
  };
  const [isNavOpen, handleNav] = useState(false);
  return (
    <Navbar dark expand="md">
      <div className="container">
        <NavbarToggler onClick={toogleNav} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"></span> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <span className="fa fa-address-card fa-lg"></span> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}
export default HeaderComponent;
