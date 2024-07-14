import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social_media">
        <a href="https://github.com/Charly92cjo" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/charlyotero/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer_title">ALURAFLIX</p>
    </footer>
  );
};

export { Footer };
