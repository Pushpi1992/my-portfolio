import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Left Column: Bio & CTAs */}
        <div className="hero-content">
          <p className="hero-tag">SOFTWARE DEVELOPER</p>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-highlight">Pushpendra Singh</span>
          </h1>

          <h2 className="hero-subtitle">
            I build scalable web &amp; mobile applications.
          </h2>

          <p className="hero-description">
            Software developer specializing in React, React Native, JavaScript and modern application development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" id="hero-btn-projects">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact" className="btn btn-secondary" id="hero-btn-contact">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-social-link" id="hero-github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-social-link" id="hero-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </a>

            <a href="mailto:psp.singhji@gmail.com" className="hero-social-link" id="hero-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Right Column: Code Card & Handwritten Note */}
        <div className="hero-card-wrapper">
          <div className="hero-card-glow"></div>

          <div className="code-window">
            <div className="code-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>

            <div className="code-body">
              <table className="code-table">
                <tbody>
                  <tr>
                    <td className="line-num">1</td>
                    <td className="code-line">
                      <span className="kw-const">const</span>{" "}
                      <span className="var-name">developer</span> = &#123;
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">2</td>
                    <td className="code-line indent-1">
                      <span className="prop-name">name</span>:{" "}
                      <span className="str-val">"Pushpendra Singh"</span>,
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">3</td>
                    <td className="code-line indent-1">
                      <span className="prop-name">role</span>:{" "}
                      <span className="str-val">"Software Developer"</span>,
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">4</td>
                    <td className="code-line indent-1">
                      <span className="prop-name">skills</span>: [
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">5</td>
                    <td className="code-line indent-2">
                      <span className="str-val">"React"</span>,
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">6</td>
                    <td className="code-line indent-2">
                      <span className="str-val">"React Native"</span>,
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">7</td>
                    <td className="code-line indent-2">
                      <span className="str-val">"JavaScript"</span>,
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">8</td>
                    <td className="code-line indent-2">
                      <span className="str-val">"Node.js"</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num">9</td>
                    <td className="code-line indent-1">],</td>
                  </tr>
                  <tr>
                    <td className="line-num">10</td>
                    <td className="code-line indent-1">
                      <span className="prop-name">passion</span>:{" "}
                      <span className="str-val">"Building great products"</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="line-num"></td>
                    <td className="code-line">&#125;;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Handwritten Annotation & Arrow */}
          <div className="hero-handwritten-note">
            <div className="note-text">
              <span>Clean code</span>
              <span>Brighter future</span>
            </div>
            <svg className="note-arrow" width="48" height="36" viewBox="0 0 48 36" fill="none">
              <path
                d="M40 4 C32 16, 18 24, 6 24"
                stroke="#8c78f9"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 18 L5 24 L12 30"
                stroke="#8c78f9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
