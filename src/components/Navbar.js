import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-navbar">
      <div className="nav-left">
        <span className="logo-dot">●</span>
        <h2 className="nav-logo">Labour & Contractor</h2>
      </div>

      <nav className="nav-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/jobs" className="nav-link">Jobs</Link>
        <Link to="/contractors" className="nav-link">Contractors</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      <div className="nav-right">
        <Link to="/login" className="nav-btn login">Login</Link>
        <Link to="/register" className="nav-btn register">Register</Link>
      </div>
    </header>
  );
}
