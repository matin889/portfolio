import React, { useRef } from "react";
import "./Contact.css";
import user from "../../Assets/user-menu.png";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github-mark.png";
import email from "../../Assets/email-50.png";
import emailjs from "@emailjs/browser";
import cvPdf from "../../Assets/CV-Abdul-Matin.pdf";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6r8lorl",
        "template_sn7w0kq",
        form.current,
        "dGQJalIVbrJGsSnDh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div id="contactForm">
        <h2 className="contactTitle">Contact Me</h2>
        <span className="contactDesc">
          Please fill out the below to discuss any job opportunity.
        </span>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Meessage"
          ></textarea>
          <button className="msgBtn" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      <div className="links">
        <a
          href={cvPdf}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <img src={user} alt="user" className="linkImage" />
        </a>

        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/abdul-matin-863b35253/"
        >
          <img src={linkedin} alt="linkedin" className="linkImage" />
        </a>
        <a target="_blank" rel="noopener" href="https://github.com/matin889">
          <img src={github} alt="github" className="linkImage" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="mailto:mdabdul.matin@chasacademy.se"
        >
          <img src={email} alt="email" className="linkImage" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
