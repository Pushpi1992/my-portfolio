import React, { useState, useEffect } from "react";

interface NavbarProps {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme = "dark", onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" id="nav-logo" onClick={handleLinkClick}>
          Pushpendra <span className="logo-accent">Singh.</span>
        </a>

        <div className="navbar-right">
          {/* Desktop Navigation */}
          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#about" id="nav-about">About</a>
            <a href="#skills" id="nav-skills">Skills</a>
            <a href="#projects" id="nav-projects">Projects</a>
            <a href="#experience" id="nav-experience">Experience</a>
            <a href="#contact" id="nav-contact">Contact</a>
          </nav>

          {/* Theme Switcher Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            id="theme-toggle-btn"
          >
            {theme === "dark" ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Backdrop */}
    {mobileMenuOpen && (
      <div
        className="mobile-backdrop"
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    )}

    {/* Mobile Drawer Menu */}
    <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} id="mobile-drawer">
      <nav className="mobile-nav-links" aria-label="Mobile Navigation">
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </nav>
    </div>
  </>
);
};

export default Navbar;
