import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-scroll";
import contactBtn from "../../Assets/web-button.jpeg";
import menu from "../../Assets/menu-50.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="photodesign" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactBtn} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      <img
        src={menu}
        alt="menu"
        className="menuImg"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="menuList" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="menuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="menuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="menuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="menuListItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
