import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaFolderOpen, FaFilePdf } from "react-icons/fa";
function MyNavbar() {
  return (
    <div className="nav-lin">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>ISRAEL OJIEFOH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link
                  to="/"
                  className="mx-4 fs-5 text-white text-decoration-none"
                >
                  {" "}
                  <FaHome /> Home
                </Link>

                <Link
                  to="/about"
                  className="mx-4  fs-5 text-white text-decoration-none"
                >
                  <FaInfoCircle /> About
                </Link>
                <Link
                  to="/projects"
                  className="mx-4 fs-5 text-white text-decoration-none"
                >
                  <FaFolderOpen /> Projects
                </Link>
                <Link
                  to="/resume"
                  className="mx-6 fs-5 text-white text-decoration-none"
                >
                  <FaFilePdf /> Resume
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
