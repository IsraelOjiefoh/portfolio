import Contacts from "../contact/contact";
import "./services.css";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger the animation only once when it first enters the viewport
    threshold: 0.2, // When 20% of the component is in view, trigger the animation
  });
  return (
    <>
      <div
        className={`your-component ${inView ? "slide-in" : ""}`}
        ref={ref} // Attach the ref to the element you want to track
      >
        <div className="skills">
          <h2>What I Offer</h2>
          <div className="frontend">
            <div className="card-head">FrontEnd Development</div>
            <div className="card-body">
              <ul>
                <li>Using React To Create Reusable Components</li>
                <li>Building User Interfaces From Scratch</li>
                <li>Updating User Interfaces</li>
                <li>Fetching Data and APIs</li>
              </ul>
            </div>
          </div>
          <div className="my-5">
            <div className="frontend">
              <div className="card-head">BackEnd Development</div>
              <div className="card-body">
                <ul>
                  <li>Using Express To Create Servers</li>
                  <li>Writing Resuable APIs With Node And Express</li>
                  <li>JWT And Firebase Authentication</li>
                  <li>Using jOi for Validation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="frontend">
              <div className="card-head">Tutorials</div>
              <div className="card-body ">
                <ul>
                  <li>Teaching The Basics Of Web Development</li>
                  <li>Building User Interfaces From Scratch</li>
                  <li>Fundamentals Of JavaScript</li>
                  <li>ES6 Reactjs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Contacts />
      </div>
    </>
  );
};

export default Services;
