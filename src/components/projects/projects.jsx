import portfolioImg from "./portfolio.jpg";
import "./projects.css";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Portfolio Website",
      ImgUrl: portfolioImg,
      technologyUsed: "CSS, React, BootStrap, Express",
      Features:
        "Responsive design, interactive elements, portfolio project showcase, and a contact form.",
      liveDemo: "https://israelojiefoh.netlify.app/",
      gitHubRepo: "http://www.github.com/IsraelOjiefoh/portfolio",
    },
  ];
  return (
    <div className="projects">
      {project.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.ImgUrl} alt="image" className="card-img-top w-75" />
          <div className=" pb-3 fs-4">{item.title}</div>
          <div className="pb-3">
            <strong>Key Features: </strong>
            {item.Features}
          </div>
          <div className="pb-3">
            <strong>Technology Used: </strong>
            {item.technologyUsed}
          </div>
          <a href={item.gitHubRepo} target="_blank ">
            <button className="btn btn-light mb-4 me-4">GitHub</button>
            <a href={item.liveDemo} target="_blank ">
              <button className="btn btn-success mb-4">Live Demo</button>
            </a>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
