import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaHandshake, FaEnvelope } from 'react-icons/fa';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          My Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="/about">
              <FaInfoCircle /> About
            </Nav.Link>
            <Nav.Link href="/services">
              <FaHandshake /> Services
            </Nav.Link>
            <Nav.Link href="/contact">
              <FaEnvelope /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
