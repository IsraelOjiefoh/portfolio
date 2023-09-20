import portfolioImg from "./portfolio.jpg";
import MemeImg from "./meme.jpg";
import { useInView } from "react-intersection-observer";
import "./projects.css";
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const projects = [
    {
      id: 1,
      imgUrl: portfolioImg,
      title: "Personal Portfolio Website",

      liveDemo: "https://israelojiefoh.netlify.app/",
      gitHubRepo: "http://www.github.com/IsraelOjiefoh/portfolio",
    },
    {
      id: 2,
      imgUrl: MemeImg,
      title: "Meme Viewer",
      liveDemo: "https://meme2.netlify.app/",
      gitHubRepo: "https://github.com/IsraelOjiefoh/memes",
    },
  ];
  const ReversedProjects = projects.reverse()
  return (
    <div className={`your-component ${inView ? "zoom-in" : ""}`} ref={ref}>
      <div className="projects ">
        {ReversedProjects.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.imgUrl} alt="image" className="w-75 pt-5" />
            <div className=" pb-3 fs-4">{project.title}</div>

            <a href={project.gitHubRepo} target="_blank ">
              <button className="btn btn-light mb-4 me-4">GitHub</button>
              <a href={project.liveDemo} target="_blank ">
                <button className="btn btn-success mb-4">Live Demo</button>
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
