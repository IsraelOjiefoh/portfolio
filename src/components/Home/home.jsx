/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home-main.svg";
import "./homes.css";
import Home2 from "./home2";
import Type from "../../Type";
import myCV from "./My_Resume.pdf";


function Home() {

  return (
    <section>
      <Container fluid id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> OJIEFOH ISRAEL</strong>
              </h1>

              <div className="type" style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <a href={myCV} target="_blank" >
            <button className="btn btn-success">DownLoad CV</button>
          </a>
        </Container>
      </Container>
      <hr />
      <div className="home2">
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
