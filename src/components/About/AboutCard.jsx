import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view bg-dark">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{  color: "gray" }}>
            <div style={{ textAlign: "center" }}>
              {" "}
              Hi Everyone, I am <span className="purple">Ojiefoh Israel </span>
            </div>
            <br /> I Am A Web Developer With A Journey Defined By inspiration
            from Beautifully Designed Websites. I Have OverCome Steep Learning
            Curves, Acquired a versitile Skill Set, And Delivered Signature
            Projects.{" "}
            <p>
              My Adaptablity To Industry Trends, Effective Communication, And
              Love For Probelem Solving Drives Me To Create Cutting-Edge Web
              Experience{" "}
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity text-light">
              <ImPointRight /> Conversing With AI
            </li>
            <li className="about-activity text-light">
              <ImPointRight /> Meeting Other Developers
            </li>
            <li className="about-activity text-light">
              <ImPointRight /> Trying New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The Web Is My Canvas And I Am The Artist Shaping A Brighter Digital
            Future. "{" "}
          </p>
          <footer className="blockquote-footer">Israel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
