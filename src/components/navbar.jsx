import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isClicked, setIsClicked] = useState("Home");

  return (
    <Container className="py-4 ">
      <Row className="navigation-row">
        <NavLink className="text-decoration-none fs-5 d-flex justify-content-around ">
          <Link className="text-decoration-none text-light" to="/">
            <Col
              xs
              lg="3"
              className={
                isClicked === "Home"
                  ? "navigation-text"
                  : "navigation-text not-clicked"
              }
              onClick={() => {
                setIsClicked("Home");
              }}
            >
              Home
            </Col>
          </Link>
          <Link to="/about" className="text-decoration-none text-light">
            <Col
              xs
              lg="3"
              className={
                isClicked === "About"
                  ? "navigation-text"
                  : "navigation-text not-clicked"
              }
              onClick={() => {
                setIsClicked("About");
              }}
            >
              About
            </Col>
          </Link>
          <Link to="/projects" className="text-decoration-none text-light">
            <Col
              xs
              lg="3"
              className={
                isClicked === "Projects"
                  ? "navigation-text"
                  : "navigation-text not-clicked"
              }
              onClick={() => {
                setIsClicked("Projects");
              }}
            >
              Projects
            </Col>
          </Link>
          <Link to="/services" className="text-decoration-none text-light">
            <Col
              xs
              lg="3"
              className={
                isClicked === "Services"
                  ? "navigation-text"
                  : "navigation-text not-clicked"
              }
              onClick={() => {
                setIsClicked("Services");
              }}
            >
              Services
            </Col>
          </Link>
        </NavLink>
      </Row>
    </Container>
  );
};

export default Navbar;
