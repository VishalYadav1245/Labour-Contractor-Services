import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <h1>
          Find Trusted <span>Labour</span> & <span>Contractors</span>
        </h1>
        <p>
          A simple platform to connect skilled labourers with verified
          contractors across India.
        </p>

        <div className="home-actions">
          <Link to="/jobs" className="home-btn primary">
            Explore Jobs
          </Link>
          <Link to="/register" className="home-btn secondary">
            Join Now
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-features">
        <div className="feature-card">
          <h3>👷 For Labour</h3>
          <p>Find daily wage & long-term jobs easily.</p>
        </div>

        <div className="feature-card">
          <h3>🏗 For Contractors</h3>
          <p>Hire skilled workers quickly and reliably.</p>
        </div>

        <div className="feature-card">
          <h3>✅ Verified</h3>
          <p>Trusted profiles with transparent details.</p>
        </div>
      </section>
    </div>
  );
}
