import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer-inner">
    <div className="footer-brand">FATHI</div>

    <p className="footer-tagline">
      Building clean, modern, and thoughtful web experiences.
    </p>

    <ul className="footer-nav">
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>

    <div className="footer-divider" />

    <div className="footer-copy">
      © 2026 Fathi. All rights reserved.
    </div>
  </div>
</footer>

  );
}
