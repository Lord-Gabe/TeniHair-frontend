import { motion } from "framer-motion";
import CEO from '../assets/CEO.png';

export default function AboutFounder() {
  return (
    <section id="about-founder" className="about section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Visionary Behind The Brand
      </motion.h2>

      <div className="about-wrapper">

        {/* TEXT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="founder-name">
            Taye Ampitan Ikuponiyi
          </span>

          <p className="founder-intro">
            What started as a childhood curiosity grew into a powerful vision.
          </p>

          <p>
            From teaching herself how to braid at a young age, Taye transformed
            passion into purpose — building a beauty brand trusted by hundreds
            of women seeking elegance, confidence, and excellence.
          </p>

          <p>
            As CEO, she leads with a deep commitment to professionalism,
            customer satisfaction, and delivering beauty experiences that leave
            lasting impressions.
          </p>

          <p className="founder-impact">
            Guided by her belief that <strong>“Knowledge is power”</strong>,
            she continues to empower young women — especially in underserved
            communities — with skills, confidence, and opportunities to thrive.
          </p>

          <p className="founder-quote">
            “Beauty is not just what you see — it’s what you become.”
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="founder-glow" />
          <img src={CEO} alt="Founder portrait" loading="lazy" />
        </motion.div>

      </div>
    </section>
  );
}