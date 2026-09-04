import React from "react";

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <p className="section-tag">ABOUT ME</p>
        <h2 className="section-title">
          Building applications that solve real problems.
        </h2>

        <div className="about-layout">
          <div className="about-description">
            <p>
              I'm a software developer focused on building modern, scalable and user-friendly applications. I enjoy working across web and mobile technologies, solving engineering problems and improving application performance and user experience.
            </p>
          </div>

          <div className="about-stats-grid">
            <div className="stat-card" id="stat-projects">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6355f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="stat-value">10+</div>
              <div className="stat-label">Projects</div>
            </div>

            <div className="stat-card" id="stat-technologies">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6355f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="stat-value">5+</div>
              <div className="stat-label">Technologies</div>
            </div>

            <div className="stat-card" id="stat-learning">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6355f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
