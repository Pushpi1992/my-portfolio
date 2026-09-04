import React from "react";

interface ExperienceItem {
  status: string;
  role: string;
  company: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    status: "Present",
    role: "Software Developer",
    company: "Your Company",
    description:
      "Building and maintaining scalable web and mobile applications using modern JavaScript technologies.",
  },
  {
    status: "Previous",
    role: "Frontend Developer",
    company: "Previous Company",
    description:
      "Worked on responsive interfaces, API integrations and reusable frontend components.",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="section-tag">EXPERIENCE</p>
        <h2 className="section-title">My professional journey</h2>

        <div className="timeline-container">
          {experiences.map((item, index) => (
            <div className="timeline-row" key={item.role}>
              {/* Timeline marker with glowing dot and status text */}
              <div className="timeline-marker-col">
                <div className="timeline-indicator-wrap">
                  <div className="timeline-glow-dot"></div>
                  {index < experiences.length - 1 && <div className="timeline-line"></div>}
                </div>
                <span className="timeline-status-text">{item.status}</span>
              </div>

              {/* Role & Company */}
              <div className="timeline-role-col">
                <h3 className="timeline-role-title">{item.role}</h3>
                <p className="timeline-company-name">{item.company}</p>
              </div>

              {/* Description */}
              <div className="timeline-desc-col">
                <p className="timeline-desc-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
