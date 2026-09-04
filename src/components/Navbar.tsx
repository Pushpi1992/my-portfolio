import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" id="nav-logo">
          Pushpendra <span className="logo-accent">Singh.</span>
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#about" id="nav-about">About</a>
          <a href="#skills" id="nav-skills">Skills</a>
          <a href="#projects" id="nav-projects">Projects</a>
          <a href="#experience" id="nav-experience">Experience</a>
          <a href="#contact" id="nav-contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
