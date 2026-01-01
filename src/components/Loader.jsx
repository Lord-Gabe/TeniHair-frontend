import { motion } from "framer-motion";
import logo from "../assets/logo.png"

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <motion.div
        className="loader-donut"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear"
        }}
      />
      <img src={logo} alt="Teni Beauty Studio Logo" className="loader-logo" />
      <p className="loader-text">Teni Beauty Studio</p>
    </div>
  );
}
