import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <span className="logo-dot">●</span>
        <h2 className="nav-logo">Labour & Contractor</h2>
      </div>

      {/* DESKTOP LINKS */}
      <nav className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/contractors" className="nav-link">Contractors</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      {/* DESKTOP BUTTONS */}
      <div className="nav-right">
        <Link to="/login" className="nav-btn login">Login</Link>
        <Link to="/register" className="nav-btn register">Register</Link>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/jobs" onClick={() => setOpen(false)}>Jobs</Link>
          <Link to="/contractors" onClick={() => setOpen(false)}>Contractors</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>

          <div className="mobile-auth">
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}
