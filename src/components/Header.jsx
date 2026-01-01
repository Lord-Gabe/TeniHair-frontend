import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleAdminClick = (e) => {
    e.preventDefault();
    closeMenu();

    const username = prompt("Enter admin username:");
    const password = prompt("Enter admin password:");

    if (username === "admin" && password === "12345") {
      window.location.href = "#admin"; // scroll to AdminPanel
    } else {
      alert("Incorrect credentials");
    }
  };


  return (
    <header className="header">
      <div className="logo">TENI HAIR & BEAUTY STUDIO</div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#community" onClick={closeMenu}>Community Development</a>
        <a href="#contact-form" onClick={closeMenu}>Purchase / Book Service</a>
        {/* <a href="#" onClick={handleAdminClick}>Admin</a> */}
      </nav>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
    </header>
  );
}
