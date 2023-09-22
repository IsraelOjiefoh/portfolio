import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark mt-5">
      <Container className="pt-5">
        <Row>
          <Col md={6} className="text-md-left text-center mb-3 mb-md-0">
            <h3>Israel Ojiefoh</h3>
          </Col>
          <Col md={6} className="text-md-right text-center">
            <ul className="list-unstyled mb-0">
              <li className="d-inline mx-2">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link to="/about" className="text-decoration-none">
                  About
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link to="/projects" className="text-decoration-none">
                  Projects
                </Link>
              </li>
              <li className="d-inline mx-2">
                <Link to="/services" className="text-decoration-none">
                  Services
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        © {new Date().getFullYear()} Israel Ojiefoh
      </div>
    </footer>
  );
};

export default Footer;
