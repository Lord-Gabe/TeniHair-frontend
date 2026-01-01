import { useState } from "react";
// import "./Footer.css";
import { SiInstagram, SiWhatsapp, SiTiktok, SiYoutube } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Footer({ scrollToSection }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Community", href: "#community" },
    { label: "Purchase", href: "#purchase" },
    { label: "Book a Service", href: "#contact" }
  ];

  const services = [
    "Makeup",
    "Hair Styling",
    "Skin Consultation",
    "Product Purchase",
    "Home Service"
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

    function instagram() {
        window.open("https://www.instagram.com/tenihair_luxuryextensions/", "_blank");
    }

    function whatsapp() {
        window.open("https://api.whatsapp.com/send?phone=2348124002781&text=Hello%20I%20am%20interested%20in%20the%20service%20and%20will%20like%20to%20make%20an%20inquiry%20.", "_blank");
    }

    function youtube(){
        window.open("http://www.youtube.com/@tayekups2710", "_blank");
    }

    // reviews link: https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODkwNDQ2Njg4NTk0OTU0/?igsh=dG5xdnA3NjR1N2Vx#

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <FaStar className="footer-logo-icon" />
              <span className="footer-logo-text">TENI BEAUTY STUDIO</span>
            </a>
            <p className="footer-desc">
              Elevating natural beauty with premium services and personalized care.<br/>
              Your beauty, our priority.
            </p>

            <div className="footer-socials">
              <button className="social-btn">
                <SiInstagram onClick={instagram}/>
              </button>
              <button className="social-btn">
                <SiWhatsapp onClick={whatsapp} />
              </button>
              <button className="social-btn">
                <SiYoutube onClick={youtube}/>
              </button>
            </div>
          </div>

          {/* Newsletter */} {/* What to do in place of this, making use of this system */}
          {/* <div className="footer-col">
            <h4 className="footer-title">Newsletter</h4>
            <p className="footer-desc-small">
              Subscribe for beauty tips, exclusive offers, and studio updates.
            </p>

            {subscribed ? (
              <p className="footer-thanks">Thank you for subscribing!</p>
            ) : (
              <form className="footer-newsletter" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-btn">
                  <FaArrowRight />
                </button>
              </form>
            )}
          </div> */}

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Teni Beauty Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
