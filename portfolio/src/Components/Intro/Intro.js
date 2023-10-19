import React from "react";
import "./Intro.css";
import bg from "../../Assets/me.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm<span className="introName">Matin</span>
          <br />
          Fullstack Developer
        </span>
        <p className="introParagraph">
          I am passionated in building and desgining software. <br />
          Currently, I love to work on web application using technologies like
          <br /> React, Tailwind, Express, REST API, GraphQl, MySQL, and NoSQL
          databases
        </p>
        {/* <Link> <button className="btn">Hire me</button> </Link> */}
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
