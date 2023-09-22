import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const YourNavbar = () => {
  const [isClicked, setIsClicked] = useState("Home");

  useEffect(() => {
    // Add event listener to close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const checkbox = document.getElementById("check");
      if (checkbox.checked && !event.target.closest(".nav-wrapper")) {
        checkbox.checked = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="fixed-top">
        <div className="nav-wrapper">
          <input type="checkbox" id="check"></input>
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">IO</label>
          <ul className="ul">
            <li className="">
              <Link
                to="/"
                onClick={() => setIsClicked("Home")}
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
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setIsClicked("Projects")}
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
                onClick={() => setIsClicked("Services")}
                className={
                  isClicked === "Services" ? "nav-link-active" : "not-clicked"
                }
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default YourNavbar;
