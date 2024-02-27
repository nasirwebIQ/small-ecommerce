import React from "react";

import { Container } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
function Navbar({ drawer }) {
  return (
    <div className="all-nav">
      <Container>
        <nav className="all-menu">
          <div className="logo">{/* <a href="#">Demo</a> */}</div>
          <div>
            <span className="cart" onClick={drawer}>
              <BsCart3 />{" "}
            </span>
            <span className="sign-in">
              <BiUser />
              Sign In
            </span>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
