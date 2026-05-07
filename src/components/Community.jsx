import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import image1 from "../assets/Orphanage visit/1.jpg";
import image2 from "../assets/Orphanage visit/2.jpg";
import image3 from "../assets/Orphanage visit/3.jpg";
import image4 from "../assets/Orphanage visit/4.jpg";
import image5 from "../assets/Orphanage visit/5.jpg";
import image6 from "../assets/Orphanage visit/6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

/* COUNT-UP STAT */
function Stat({ value, label, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <h3>{count}+</h3>
      <span>{label}</span>
    </motion.div>
  );
}

export default function Community() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="community" className="community section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Beyond Beauty — Our Impact
      </motion.h2>

      <div className="community-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="community-text"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="community-intro">
            At <strong>Teni Hair & Beauty Studio</strong>, beauty is not just seen —
            it is <strong>shared</strong>, <strong>taught</strong>, and <strong>multiplied</strong>.
          </p>

          <p>
            We go beyond styling. Through outreach programs and training sessions,
            we empower young women with real skills, real confidence,
            and real opportunities to transform their lives.
          </p>

          {/* IMAGE SLIDER */}
          <div className="community-gallery">

            {/* subtle glow */}
            <motion.div
              className="gallery-glow"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            />

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="Community outreach"

                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}

                transition={{
                  duration: 1.2,
                  ease: "easeInOut"
                }}
              />
            </AnimatePresence>
          </div>

          <motion.p
            className="community-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            “Real beauty creates impact.”
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="community-stats"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Stat value={500} label="Women Empowered" delay={0.1} />
          <Stat value={20} label="Training Sessions" delay={0.2} />
          <Stat value={100} label="Commitment to Impact (%)" delay={0.3} />
        </motion.div>

      </div>
    </section>
  );
}