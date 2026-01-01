import {motion, AnimatePresence} from "framer-motion";
// Slideshow images
import smiles from "../assets/smiles.jpeg";
import smile2 from "../assets/smiles.jpeg";
import hands from "../assets/hands.jpeg";
import bea6 from "../assets/bea6.png";
import bea4 from "../assets/bea4.jpg";
import be3 from "../assets/be3.png";
import bea2 from "../assets/bea2.jpg";

import { useState, useEffect } from "react";

const images = [
  bea4,
  smiles,
  be3,
  hands,
  bea2,
  smile2,
  bea6
];

export default function Hero() {
    //Slideshow effect
      const [index, setIndex] = useState(0);
      useEffect(() => {
        const slideTimer = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(slideTimer);
      }, []);
    
    return (
        <motion.section className="hero"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
        >
            <div className="hero-content">
                <h1>BEAUTY <br /> IMPACT <br /> UPLIFTMENT</h1>
                <p>Luxury products, expert services, and a community built on creativity and confidence.</p>
                <button className="cta-btn" onClick={() => window.location.href = "#products"}>Explore Products</button>
            </div>

            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={index}
                    className="hero-bg"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                >

                </motion.div>
            </AnimatePresence>
        </motion.section>
    );
}   