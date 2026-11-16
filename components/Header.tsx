"use client";

import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#top" className="wordmark" aria-label="Mare Nostrum, home">
        mare <span>nostrum</span>
        <i>✳</i>
      </a>
      <nav
        className={menuOpen ? "nav nav-open" : "nav"}
        aria-label="Main navigation"
      >
        <a href="#story" onClick={() => setMenuOpen(false)}>
          Our story
        </a>
        <a href="#menu" onClick={() => setMenuOpen(false)}>
          The menu
        </a>
        <a href="#visit" onClick={() => setMenuOpen(false)}>
          Come by
        </a>
      </nav>
      <a href="#menu" className="header-cta">
        EXPLORE THE MENU <span>↗</span>
      </a>
      <button
        className="mobile-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </header>
  );
}
