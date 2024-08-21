import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import logo1 from "./Screenshot_1.png";

function NavBar() {
  return (
    <nav>
      <img
        src={logo1}
        style={{ width: "7rem", height: "2rem" }}
        className="nav--logo"
      />
      <div className="nav-links">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">About us</Nav.Link>
        <Nav.Link href="#home">Explore Jobs</Nav.Link>
        <Nav.Link href="#home">Premium Offers</Nav.Link>
        <Button>Sign in</Button>
      </div>
    </nav>
  );
}

export default NavBar;
