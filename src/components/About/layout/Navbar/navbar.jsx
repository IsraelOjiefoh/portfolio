import { useState } from "react";
// import { Row, Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function YourNavbar() {
  const [isClicked, setIsClicked] = useState("Home");

  return (
    <div>
      {/* <Container > */}
      <nav className="fixed-top ">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Israel Ojiefoh</label>

        <ul>
          <li className="">
            <Link
              to="/"
              onClick={() => setIsClicked("Home", console.log("Home "))}
              className={
                isClicked === "Home" ? "nav-link-active" : "not-clicked"
              }
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              onClick={() => setIsClicked("About")}
              className={
                isClicked === "About" ? "nav-link-active" : "not-clicked"
              }
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsClicked("projects")}
              className={
                isClicked === "Projects" ? "nav-link-active" : "not-clicked"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => setIsClicked("services")}
              className={
                isClicked === "services" ? "nav-link-active" : "not-clicked"
              }
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      {/* <Row className="navigation-row">
          <NavLink className="text-decoration-none fs-5 d-flex justify-content-around">
            <Link
              className={
                isClicked === "Home" ? "nav-link-active" : "not-clicked"
              }
              to="/"
              onClick={() => {
                setIsClicked("Home");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={
                isClicked === "About" ? "nav-link-active" : "not-clicked"
              }
              onClick={() => {
                setIsClicked("About");
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={
                isClicked === "Projects" ? "nav-link-active" : "not-clicked"
              }
              onClick={() => {
                setIsClicked("Projects");
              }}
            >
              Projects
            </Link>
            <Link
              to="/services"
              className={
                isClicked === "Services" ? "nav-link-active" : "not-clicked"
              }
              onClick={() => {
                setIsClicked("Services");
              }}
            >
              Services
            </Link>
          </NavLink>
        </Row> */}
      {/* </Container> */}
    </div>
  );
}

export default YourNavbar;
