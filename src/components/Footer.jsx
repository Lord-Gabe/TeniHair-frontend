import { SiInstagram, SiWhatsapp, SiTiktok, SiYoutube } from "react-icons/si";
import { FaStar } from "react-icons/fa";

export default function Footer() {

  const instagram = () => window.open(
    "https://www.instagram.com/tenihair_luxuryextensions/", "_blank"
  );

  const whatsapp = () => window.open(
    "https://api.whatsapp.com/send?phone=2348124002781&text=Hello%20I%20am%20interested%20in%20the%20service.", "_blank"
  );

  const youtube = () => window.open(
    "http://www.youtube.com/@tayekups2710", "_blank"
  );

  const tiktok = () => window.open(
    "https://www.tiktok.com/@tenihairstudio", "_blank"
  );

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* BRAND + SOCIALS */}
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <FaStar className="footer-logo-icon" />
            <span className="footer-logo-text">TENI BEAUTY STUDIO</span>
          </a>
          <p className="footer-desc">
            Elevating natural beauty with premium services.<br/>
            Your beauty, our priority.
          </p>

          <div className="footer-socials">
            <button className="social-btn" onClick={instagram}><SiInstagram /></button>
            <button className="social-btn" onClick={whatsapp}><SiWhatsapp /></button>
            <button className="social-btn" onClick={youtube}><SiYoutube /></button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Teni Beauty Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            {/* <button>Privacy Policy</button>
            <button>Terms of Service</button> */}
          </div>
        </div>

      </div>
    </footer>
  );
}