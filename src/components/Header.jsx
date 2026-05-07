import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Toggle sidebar menu
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">TENI HAIR & BEAUTY STUDIO</div>

        {/* Sidebar / Nav */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}> {/* Desktop view */}
          <a href="#about" onClick={closeMenu} className={active === "about" ? "active" : ""}>About</a>
          <a href="#products" onClick={closeMenu} className={active === "products" ? "active" : ""}>Products</a>
          <a href="#community" onClick={closeMenu} className={active === "community" ? "active" : ""}>Community</a> 
          <a href="#location" onClick={closeMenu} className={active === "location" ? "active" : ""}>Location</a>
          <a href="#policies" onClick={closeMenu} className={active === "policies" ? "active" : ""}>Policies</a>
          <a href="#about-founder" onClick={closeMenu} className={active === "about-founder" ? "active" : ""}>Founder</a>
          <a href="https://wa.me/+2348138999851?text=Hello%20Teni%20Hair%20and%20Beauty%20Studio!%20I%20am%20interested%20in%20your%20services." 
          target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="whatsappButton" id="buy-btn">
            SHOP NOW <FaWhatsapp className="w_icon"/>
          </a>
        </nav>

        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}> {/* Mobile view */}
          <a href="#about" onClick={closeMenu} className={active === "about" ? "active" : ""}>About</a>
          <a href="#products" onClick={closeMenu} className={active === "products" ? "active" : ""}>Products</a>
          <a href="#community" onClick={closeMenu} className={active === "community" ? "active" : ""}>Community</a>
          <a href="#location" onClick={closeMenu} className={active === "location" ? "active" : ""}>Location</a>
          <a href="#about-founder" onClick={closeMenu} className={active === "about-founder" ? "active" : ""}>Founder</a>
          <a href="https://wa.me/+2348138999851" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="whatsappButton">
            SHOP NOW <FaWhatsapp className="w_icon"/>
          </a>
        </nav>

        {/* Hamburger toggle */}
        <button className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Backdrop */}
      <div className={`menu-overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu}></div>
    </>
  );
}