import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import location from "../assets/loc1.png";

export default function Location() {
  return (
    <section id="location" className="location-section">

      {/* LEFT */}
      <motion.div
        className="location-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>VISIT OUR STUDIO</h1>

        <p className="location-intro">
          Step into a space where beauty is crafted with care, precision, and passion.
        </p>

        <div className="location-item">
          <FaMapMarkerAlt />
          <span>
            Suite 06 Sabr Plaza, Block B, Rafi Close Kachia Road,<br />
            Kaduna State, Nigeria
          </span>
        </div>

        <div className="location-item">
          <FaPhoneAlt />
          <span>+2348124002781</span>
        </div>

        <div className="location-item">
          <FaEnvelope />
          <a href="mailto:tenihair069@gmail.com">
            tenihair069@gmail.com
          </a>
        </div>

        {/* CTA BUTTON */}
        <a
          href="https://maps.google.com/?q=Sabr+Plaza+Kachia+Road,+Kaduna+State,+Nigeria"
          target="_blank"
          rel="noreferrer"
          className="location-btn"
        >
          <FaMap /> Get Directions 
        </a>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="location-image"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={location} loading="lazy" alt="Studio location" />
      </motion.div>

    </section>
  );
}