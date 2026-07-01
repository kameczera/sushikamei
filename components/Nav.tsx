"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#barcos", label: "Barcos" },
  { href: "#sushis", label: "Sushis" },
  { href: "#jantares", label: "Jantares" },
  { href: "#festas", label: "Festas" },
  { href: "#sobre", label: "Sushiman" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openChat() {
    window.dispatchEvent(new Event("kamei:open-chat"));
    setMenuOpen(false);
  }

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-brand" aria-label="Sushi Kamei — início">
        <span className="mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/marca/logo.jpg" alt="Logo Sushi Kamei" />
        </span>
        <span className="name">
          <b>Sushi Kamei</b>
          <span className="kanji">亀井 寿司</span>
        </span>
      </a>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="nav-cta" onClick={openChat} role="button" tabIndex={0}>
          Pedir agora
        </a>
      </div>

      <button
        className="nav-burger"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            background: "rgba(244,239,228,0.98)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--gold-line)",
            display: "flex",
            flexDirection: "column",
            padding: "12px",
            zIndex: 99,
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "15px 16px",
                fontFamily: "var(--font-jp)",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "0.72rem",
                color: "var(--ink-dim)",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            className="btn btn-primary"
            onClick={openChat}
            style={{ margin: "10px", justifyContent: "center" }}
          >
            Pedir agora
          </button>
        </div>
      )}
    </nav>
  );
}
