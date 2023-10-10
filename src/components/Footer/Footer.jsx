import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="rrss-links">
        <a href="#" target="_blank" rel="noopenernoreferrer">
          <FaInstagram aria-hidden="true" focusable="false" />
          <span className="visually-hidden">Visítanos en Instagram</span>
        </a>
        <a href="#" target="_blank" rel="noopenernoreferrer">
          <FaFacebookF aria-hidden="true" focusable="false" />
          <span className="visually-hidden">Visítanos en Facebook</span>
        </a>
        <a href="#" target="_blank" rel="noopenernoreferrer">
          <FaTiktok aria-hidden="true" focusable="false" />
          <span className="visually-hidden">Visítanos en Tiktok</span>
        </a>
        <a href="#" target="_blank" rel="noopenernoreferrer">
          <FaTwitter aria-hidden="true" focusable="false" />
          <span className="visually-hidden">Visítanos en Twitter</span>
        </a>
      </div>
      <p>© 2023 Pizzería Mamma Mía</p>
    </footer>
  );
};

export default Footer;
