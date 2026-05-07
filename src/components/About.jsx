import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        WHO WE ARE
      </motion.h2>

      {/* INTRO HOOK */}
      <motion.p
        className="about-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        At <strong>Teni Hair and Beauty Studio</strong>, beauty isn’t just a service —  
        it’s a transformation, a confidence boost, a statement.
      </motion.p>

      {/* MISSION CARD */}
      <motion.div
        className="highlight"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>
          Our mission is simple yet powerful:  
          <br />
          <strong>
            To enhance every woman’s beauty through premium, intentional care.
          </strong>
        </p>
      </motion.div>

      {/* STORY */}
      <motion.p
        className="about-story"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        What began as a growing online brand has blossomed into a full beauty studio —  
        a space where creativity meets craftsmanship, and every client walks out renewed.
      </motion.p>

      {/* PROOF */}
      <motion.div
        className="about-proof"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
      >
        <p>
          With <strong>500+ satisfied women</strong>, we specialize in:
        </p>

        <ul>
          <li> Lace Wig Installation</li>
          <li> Wig Revamps</li>
          <li> Makeup Artistry</li>
          <li> Natural Hair Care</li>
          <li> Braids & Ready-to-Wear Wigs</li>
        </ul>
      </motion.div>

      {/* BRAND PHILOSOPHY */}
      <motion.p
        className="about-closing"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Guided by our promise —  
        <strong> “Great Hair, Great Look, Great Quality”</strong> —  
        we go beyond beauty.
        <br /><br />
        We build <strong>confidence</strong>, inspire <strong>impact</strong>, and nurture a thriving  
        <strong> community of empowered women</strong>.
      </motion.p>

    </section>
  );
}