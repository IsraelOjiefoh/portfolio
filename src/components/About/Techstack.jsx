import { Card, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Card className="tech-card mb-5">
      <Card.Body>
        <CardHeader>My Skills</CardHeader>
        <Row
          className="tech-icons-row"
          style={{ justifyContent: "center", paddingBottom: "50px" }}
        >
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Techstack;
