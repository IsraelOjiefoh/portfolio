import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaInfoCircle,
  FaFolderOpen,
  FaCertificate,
} from "react-icons/fa";
import "./NavBar.css";
import { useState } from "react";

const MyNavbar = () => {
  const [isClicked, setIsClicked] = useState("Home");

  return (
    <Navbar
      id="custom-navbar"
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Israel Ojiefoh</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="nav-lin">
              <Nav.Link
                href="#home"
                onClick={() => setIsClicked("Home")}
                className={`navigation-text fs-5 ${
                  isClicked === "Home" ? "active" : ""
                }`}
              >
                <FaHome className="icons" /> Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                onClick={() => setIsClicked("About")}
                className={`navigation-text fs-5${
                  isClicked === "About" ? "active" : ""
                }`}
              >
                <FaInfoCircle className="icons" /> About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => setIsClicked("Projects")}
                className={`navigation-text fs-5${
                  isClicked === "Projects" ? "active" : ""
                }`}
              >
                <FaFolderOpen className="icons" /> Projects
              </Nav.Link>
              <Nav.Link
                href="#certificates"
                onClick={() => setIsClicked("Certificates")}
                className={`navigation-text fs-5 ${
                  isClicked === "Certificates" ? "active" : ""
                }`}
              >
                <FaCertificate className="icons" /> Certificates
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
