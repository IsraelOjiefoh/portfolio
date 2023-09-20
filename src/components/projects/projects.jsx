import portfolioImg from "./portfolio.jpg";
import MemeImg from "./meme.jpg";
import "./projects.css";
const Projects = () => {
  const project = [
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
      gitHubRepo: "http://www.github.com/IsraelOjiefoh/meme",
    },
  ];
  return (
    <div className="projects">
      {project.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.imgUrl} alt="image" className="w-75" />
          <div className=" pb-3 fs-4">{item.title}</div>

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
