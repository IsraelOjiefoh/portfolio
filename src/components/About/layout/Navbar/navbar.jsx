import { useState } from "react";
import { Row, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css"; // Replace with your CSS file

function YourNavbar() {
  const [isClicked, setIsClicked] = useState("");

  return (
    <div>
      <Container className="py-4">
        <Row className="navigation-row">
          <NavLink className="text-decoration-none fs-5 d-flex justify-content-around">
            <Link
              className={`text-decoration-none text-light ${
                isClicked === "Home" ? "nav-link-active" : ""
              }`}
              to="/"
              onClick={() => {
                setIsClicked("Home");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-decoration-none text-light ${
                isClicked === "About" ? "nav-link-active" : ""
              }`}
              onClick={() => {
                setIsClicked("About");
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`text-decoration-none text-light ${
                isClicked === "Projects" ? "nav-link-active" : ""
              }`}
              onClick={() => {
                setIsClicked("Projects");
              }}
            >
              Projects
            </Link>
            <Link
              to="/services"
              className={`text-decoration-none text-light ${
                isClicked === "Services" ? "nav-link-active" : ""
              }`}
              onClick={() => {
                setIsClicked("Services");
              }}
            >
              Services
            </Link>
          </NavLink>
        </Row>
      </Container>
    </div>
  );
}

export default YourNavbar;
