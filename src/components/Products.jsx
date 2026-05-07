import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import cli1 from "../assets/cli1.png";
import cli2 from "../assets/cli2.png";
import cli3 from "../assets/cli3.png";
import wig1 from "../assets/wig1.png";
import wig2 from "../assets/wig2.png";
import wig3 from "../assets/leee.png";

function instagram() {
  window.open("https://www.instagram.com/tenihair_luxuryextensions/", "_blank");
}

function whatsapp() {
  window.open("https://wa.me/+2348138999851?text=Hello%20Teni%20Hair%20and%20Beauty%20Studio!%20I%20am%20interested%20in%20your%20services.", "_blank");
}

const makeupServices = [
  {
    img: cli1,
    title: "Bridal Glam",
    desc: "Flawless, long-lasting makeup for your big day."
  },
  {
    img: cli2,
    title: "Soft Glam",
    desc: "Natural glow with a touch of elegance."
  },
  {
    img: cli3,
    title: "Event Makeup",
    desc: "Stand out beautifully at every occasion."
  }
];

const wigServices = [
  {
    img: wig2,
    title: "Wig Revamp",
    desc: "Bring your old wig back to life."
  },
  {
    img: wig1,
    title: "Custom Styling",
    desc: "Tailored looks that match your vibe."
  },
  {
    img: wig3,
    title: "Ready-to-Wear Wigs",
    desc: "Instant beauty, no stress."
  }
];

export default function Products() {
  return (
    <section id="products" className="products section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services & Signature Looks
      </motion.h2>

      {/* MAKEUP */}
      <motion.h3
        className="product-category"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Makeup Services
      </motion.h3>

      <motion.div
        className="product-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {makeupServices.map((item, i) => (
          <motion.div
            key={i}
            className="product-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} loading="lazy" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>

            <button className="buy-btn" onClick={whatsapp}>
              <FaWhatsapp /> Book Now
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* WIGS */}
      <motion.h3
        className="product-category"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Wig Services
      </motion.h3>

      <motion.div
        className="product-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {wigServices.map((item, i) => (
          <motion.div
            key={i}
            className="product-card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} loading="lazy" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>

            <button className="buy-btn" onClick={instagram}>
              <FaInstagram /> Explore
            </button>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}