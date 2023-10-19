import React from "react";
import "./Portfolio.css";
import project1 from "../../Assets/project-1.png";
import project2 from "../../Assets/project-2.png";
import project3 from "../../Assets/ecoconect.png";
import project4 from "../../Assets/project-4.png";
import project5 from "../../Assets/project-5.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolioTitle">My Portfolio</h2>
      <span className="ProfileText">
        I want to work on different projects that are relevant to each branch,
        and at the same time be able to constantly develop but also be able to
        test other positions with relevance to my education.
      </span>
      <div className="Projects">
        <a
          href="https://matin889.github.io/online-shopping/index.html"
          target="_blank"
          rel="noopener"
        >
          <img src={project1} alt="" className="project" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://glittering-meringue-3613c9.netlify.app/"
        >
          <img src={project2} alt="" className="project" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/matin889/EcoConnect-Beta.git"
        >
          <img src={project3} alt="" className="project" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/matin889/Jobchasers.git"
        >
          <img src={project4} alt="" className="project" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://matin889.github.io/Memory-game/"
        >
          <img src={project5} alt="" className="project" />
        </a>
      </div>
      {/* <button type="submit" className="portfolioBtn">
        See More
      </button> */}
    </section>
  );
};

export default Portfolio;
