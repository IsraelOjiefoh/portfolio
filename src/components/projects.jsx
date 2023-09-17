import portfolioImg from "../Assets/portfolio.jpg";
import "./projects.css";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Portfolio Website",
      ImgUrl: portfolioImg,
      description:
        "Explore this very portfolio website you're on right now! It's a testament to my skills in web development and design. From the sleek user interface to the seamless user experience, it's a prime example of my capabilities.",
      technologyUsed: "CSS, React, BootStrap",
      Features:
        "Key Features: Responsive design, interactive elements, portfolio project showcase, and a contact form.",
      liveDemo: "https://israelojiefoh.netlify.app/",
      gitHubRepo: "http://www.github.com/IsraelOjiefoh/portfolio",
    },
    
  ];
  return (
    <div className="projects">
      {project.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.ImgUrl} alt="image" className="card-img-top" />
          <div className="card-title p-3 fs-4">{item.title}</div>
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
