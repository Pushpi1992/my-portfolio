import React from "react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const skillsList: SkillItem[] = [
  {
    name: "JavaScript",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 16.5c.5.8 1.2 1.3 2.3 1.3 1.2 0 1.9-.6 1.9-1.5 0-1-.8-1.4-2.1-1.9-1.8-.7-3-1.6-3-3.6 0-1.8 1.4-3.2 3.5-3.2 1.5 0 2.6.5 3.3 1.8l-1.8 1.1c-.4-.7-.9-1-1.5-1-.7 0-1.2.4-1.2 1 0 .7.5 1.1 1.6 1.5 2 .8 3.5 1.6 3.5 3.8 0 2.2-1.7 3.4-4 3.4-2.2 0-3.6-1.1-4.2-2.5l1.8-1.2zM15.5 7.8h2.3v7.4c0 1.7-.9 2.5-2.5 2.5-.7 0-1.4-.1-1.9-.4l.4-1.8c.4.2.8.3 1.2.3.6 0 .9-.3.9-1.1V7.8z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M12.5 8h-7v2h2.3v9h2.4v-9h2.3V8zm3.2 5.5c0-.9.7-1.5 1.8-1.5 1.1 0 1.8.6 1.8 1.5 0 .6-.4 1-1.3 1.4l-.8.3c-1.6.7-2.7 1.4-2.7 3.3 0 2 1.6 3.5 3.8 3.5 1.6 0 2.9-.6 3.7-1.7l-1.6-1.3c-.5.7-1.2 1-1.9 1-.9 0-1.6-.6-1.6-1.4 0-.7.5-1.1 1.4-1.5l.8-.3c1.8-.8 2.8-1.6 2.8-3.4 0-1.9-1.5-3.3-3.6-3.3-1.6 0-2.8.6-3.6 1.7l1.4 1.4z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#00D8FF" stroke="none" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M16 8v8M9 8v8l7-8" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" fill="#22C55E" opacity="0.15" />
        <path d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6v-9.2l8-4.6z" stroke="#22C55E" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 8v8m-4-6l4-2 4 2" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 2.5l1.6 17.5 6.4 1.8 6.4-1.8L20 2.5H4z" fill="#E34F26" />
        <path d="M12 4.2v16l5-1.4 1.3-14.6H12z" fill="#EF652A" />
        <path d="M8.5 7.5h7l-.2 2.2H9l.2 2.2h5.5l-.4 4.5-2.3.7-2.3-.7-.1-1.6H7.8l.2 3.1 4 1.1 4-1.1.6-6.4H8.5V7.5z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 2.5l1.6 17.5 6.4 1.8 6.4-1.8L20 2.5H4z" fill="#1572B6" />
        <path d="M12 4.2v16l5-1.4 1.3-14.6H12z" fill="#33A9DC" />
        <path d="M8.5 7.5h7l-.2 2.2H9l.2 2.2h5.5l-.4 4.5-2.3.7-2.3-.7-.1-1.6H7.8l.2 3.1 4 1.1 4-1.1.6-6.4H8.5V7.5z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 8.5 6 14.5c0 3.6 2.6 6.5 6 7.5 3.4-1 6-3.9 6-7.5C18 8.5 12 2 12 2z" fill="#10AA50" />
        <path d="M12 2v20c.3 0 .7-.1 1-.2 2.9-1 5-3.8 5-7.3 0-5.5-5.5-11.8-6-12.5z" fill="#13AA52" />
        <path d="M12 16.5V22" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22.5 10.9L13.1 1.5a1.7 1.7 0 00-2.4 0L8.3 3.9l3.1 3.1a2 2 0 012.5 2.5l3 3a2 2 0 11-1.2 1.2l-2.9-2.9v4.2a2 2 0 11-1.7 0V10.4a2 2 0 01-1.1-2.6L7.1 5.3 1.5 10.9a1.7 1.7 0 000 2.4l9.4 9.4c.7.7 1.7.7 2.4 0l9.2-9.2a1.7 1.7 0 000-2.6z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFF">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <p className="section-tag">MY SKILLS</p>
        <h2 className="section-title">Technologies I work with</h2>

        <div className="skills-pills-container">
          {skillsList.map((skill) => (
            <div className="skill-pill" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
