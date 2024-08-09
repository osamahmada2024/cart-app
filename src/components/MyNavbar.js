import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import image from "../images/download.png";
import "../css/MyNavbar.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function MyNavbar() {
  const cart= useSelector((state)=>state.cart )

  return (
    <Navbar expand="lg" className="fixed bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          <img style={{ borderRadius:"30%",maxWidth: "30%" }} src={image} alt="LOGO" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Products
            </Link>
            <Link className="nav-link" to="/cart">
              cart-
              <mark style={{ textAlign: "center", borderRadius: "30%" }}>
              {cart.length}
              </mark>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
