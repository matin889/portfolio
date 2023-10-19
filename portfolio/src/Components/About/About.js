import React from "react";
import "./About.css";
import html from "../../Assets/html.png";
import css from "../../Assets/css3.png";
import js from "../../Assets/javascript.png";
import react from "../../Assets/react.png";
import node from "../../Assets/nodejs-2.svg";
import figma from "../../Assets/figma.png";
import ts from "../../Assets/typescript.png";
import angular from "../../Assets/angular.png";
import sql from "../../Assets/my-sql.png";
import mongodb from "../../Assets/mongodb.png";
import vue from "../../Assets/vue-js.png";
import cicd from "../../Assets/CI-CD.jpeg";

const About = () => {
  return (
    <section id="about">
      <h2 className="aboutTitle">About Me</h2>
      <p className="aboutText">
        Hello, my name is Matin. I have been praised for possessing key
        qualities such as a high tolerance for stress, punctuality, and a strong
        sense of responsibility. Additionally, I am also curious and enjoy
        learning new things and continuously improving my skills as a Developer.
        My current goal is to secure employment/internship in Fullstack
        development, as I aspire to evolve as a programmer while pursuing my
        degree and making a valuable contribution. In the long run, I aim to
        work on diverse projects that align with the industry's trends, allowing
        me to continuously grow and learn new things.
      </p>
      <h3 className="skillTitle">Skills</h3>
      <div className="skills">
        <img src={html} alt="skill" className="skillImg"></img>
        <img src={css} alt="skill" className="skillImg"></img>
        <img src={figma} alt="skill" className="skillImg"></img>
        <img src={js} alt="skill" className="skillImg"></img>
        <img src={node} alt="skill" className="skillImg"></img>
        <img src={react} alt="skill" className="skillImg"></img>
        <img src={ts} alt="skill" className="skillImg"></img>
        <img src={angular} alt="skill" className="skillImg"></img>
        <img src={mongodb} alt="skill" className="skillImg"></img>
        <img src={sql} alt="skill" className="skillImg"></img>
        <img src={vue} alt="skill" className="skillImg"></img>
        <img src={cicd} alt="skill" className="skillImg"></img>
      </div>
    </section>
  );
};

export default About;
