import resumePDF from '/assets/RESUME.pdf';
import yourProfilePic from '/assets/your-profile-pic.png';
const SKILLS = [
  "HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github",
];

export default function Hero() {
  // Quadruple for a seamless infinite scroll loop
  const skillsRepeated = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];
  
  const scrollToContacts = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    // Open PDF in new tab
    window.open(resumePDF, '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-body">

        {/* Left: Text */}
        <div className="hero-text">
          <h1 className="hero-hello">
            Hello<span className="dot">.</span>
          </h1>

          <div className="hero-iam">
            <span className="hero-iam-text">I'm Jolit</span>
            <div className="hero-line" />
          </div>

          <div className="hero-role">Software Developer</div>

          <div className="btn-row">
            <button className="btn-primary" onClick={scrollToContacts}>Got a project?</button>
            <button className="btn-outline" onClick={handleResume}>My resume</button>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero-avatar-wrap">
          <span className="bracket-left">&lt;</span>
          <div className="avatar-ring" />
          {/* Replace avatar-placeholder with an <img> once you have your photo:
              <img className="avatar-photo" src="/assets/your-profile-pic.png" alt="Jolit Korat" /> */}
          <img className="avatar-photo" src={yourProfilePic} alt="Jolit Korat" />
          <span className="bracket-right">&gt;</span>
        </div>

      </div>

      {/* Skills scrolling bar */}
      <div className="skills-bar">
        <div className="skills-track">
          {skillsRepeated.map((skill, i) => (
            <span className="skill-name" key={i}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}