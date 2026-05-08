
import githubIcon from "/assets/github.png";
import linkedinIcon from "/assets/linkedin.png";
import gmailIcon from "/assets/gmail.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-name">Jolit Korat</div>
      <div className="footer-copy">
        © 2026 Jolit Korat. Crafted with passion and precision.
      </div>
      <div className="footer-socials">

        {/* Email */}
        <a className="social-btn" href="mailto:jensen.omega@email.com" title="Email">
          <img src={gmailIcon} alt="Email" />
        </a>

        {/* GitHub */}
        <a className="social-btn" href="www.linkedin.com/in/jolit-korat-3a8374276" target="_blank" rel="noreferrer" title="GitHub">
          <img src={githubIcon} alt="GitHub" />
        </a>

        {/* LinkedIn */}
        <a className="social-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

      </div>
    </footer>
  );
}
