import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaInfoCircle,
  FaFolderOpen,
  FaCertificate,
} from "react-icons/fa";

function MyNavbar() {
  // eslint-disable-next-line no-unused-vars
  const [isClicked, setIsClicked] = useState("Home");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">ISRAEL OJIEFOH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setIsClicked("Home")} href="/">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link onClick={() => setIsClicked("About")} href="/about">
              <FaInfoCircle /> About
            </Nav.Link>
            <Nav.Link href="/projects" onClick={() => setIsClicked("Projects")}>
              <FaFolderOpen /> Projects
            </Nav.Link>
            <Nav.Link
              href="/certificates"
              onClick={() => setIsClicked("Certificates")}
            >
              <FaCertificate /> Certificates
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
