import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import image1 from "../assets/Orphanage visit/1.jpg";
import image2 from "../assets/Orphanage visit/2.jpg";
import image3 from "../assets/Orphanage visit/3.jpg";
import image4 from "../assets/Orphanage visit/4.jpg";
import image5 from "../assets/Orphanage visit/5.jpg";
import image6 from "../assets/Orphanage visit/6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

export default function Community() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);
  return (
    <section id="community" className="community section">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Community Development
      </motion.h2>

      <div className="community-wrapper">
        {/* TEXT + IMAGE */}
        <motion.div
          className="community-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="community-intro">
            Beauty goes beyond appearance.
            At <strong>Teni Hair & Beauty Studio</strong>, we invest in people.
          </p>

          <p>
            Through community outreach, we organize workshops and empowerment
            programs, equipping young women and girls with skills, confidence,
            and opportunity to thrive.
          </p>

          {/* GALLERY IMAGE */}
          <div className="community-gallery">
            <AnimatePresence mode="wait">
                <motion.img key={current} src={images[current]} alt="Community outreach program" 
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                }}/>
            </AnimatePresence>
          </div>

          <p className="community-quote">
            “Bringing beauty outside and within.”
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="community-stats"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="stat-card">
            <h3>500+</h3>
            <span>Women Served</span>
          </div>

          <div className="stat-card">
            <h3>20+</h3>
            <span>Training Sessions</span>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <span>Commitment to Impact</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* SMALL STAT COMPONENT */
function Stat({ value, label, delay }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h3>{value}</h3>
      <span>{label}</span>
    </motion.div>
  );
}
