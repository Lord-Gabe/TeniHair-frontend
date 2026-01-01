import {motion, AnimatePresence} from "framer-motion";
import cli1 from "../assets/cli1.png";
import cli2 from "../assets/cli2.png";
import cli3 from "../assets/cli3.png";
import wig1 from "../assets/wig1.png";
import wig2 from "../assets/wig2.png";
import wig3 from "../assets/wig3.png";

const products = [
  cli1,
  cli2,
  cli3,
  wig1,
  wig2,
  wig3
];

function instagram() {
  window.open("https://www.instagram.com/tenihair_luxuryextensions/", "_blank");
};

export default function Products() {
    return (
        <section id="products" className="products section">
          <motion.h2
            initial={{ opacity: 0}}  
            whileInView={{ opacity: 1}}
            transition={{ duration: 1.5 }}      
          >Our Services and Products</motion.h2><br/><br/>

          <motion.div className="product-grid"
            initial={{ opacity: 0 , y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 1 }}
          >
            <div className="product-card">
              <img src={cli1}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>

            <div className="product-card">
              <img src={cli2}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>

            <div className="product-card">
              <img src={cli3}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>

            <div className="product-card">
              <img src={wig2}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>

            <div className="product-card">
              <img src={wig1}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>

            <div className="product-card">
              <img src={wig3}  loading="lazy"/>
              <button className="buy-btn" onClick={instagram}>See more</button>
            </div>
          </motion.div>
        </section>
    );
}