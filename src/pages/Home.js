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
          A smart digital platform that connects skilled labourers with verified
          contractors across India — fast, secure, and reliable.
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

      {/* WHY CHOOSE US */}
      <section className="home-features">
        <div className="feature-card">
          <h3>👷 For Labour</h3>
          <p>
            Get access to daily wage, contract-based, and long-term construction
            jobs near your location with fair payment.
          </p>
        </div>

        <div className="feature-card">
          <h3>🏗 For Contractors</h3>
          <p>
            Hire verified, skilled workers quickly without agents or middlemen,
            saving time and cost.
          </p>
        </div>

        <div className="feature-card">
          <h3>✅ Verified Profiles</h3>
          <p>
            Every labourer and contractor profile is reviewed to ensure trust,
            safety, and transparency.
          </p>
        </div>

        <div className="feature-card">
          <h3>📍 Location Based Jobs</h3>
          <p>
            Find workers or jobs based on your city, site location, and work
            requirements.
          </p>
        </div>

        <div className="feature-card">
          <h3>💬 Direct Communication</h3>
          <p>
            Talk directly with contractors or labourers without commission or
            third-party involvement.
          </p>
        </div>

        <div className="feature-card">
          <h3>🕒 Fast & Reliable</h3>
          <p>
            Save time by instantly matching labour demand with available skilled
            workers.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="home-features">
        <div className="feature-card">
          <h3>📝 Step 1: Register</h3>
          <p>
            Sign up as a Labour or Contractor by providing basic details and
            skills.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔍 Step 2: Search</h3>
          <p>
            Contractors post jobs, labourers browse available work opportunities.
          </p>
        </div>

        <div className="feature-card">
          <h3>🤝 Step 3: Connect</h3>
          <p>
            Contact directly, finalize work details, and start working without
            delays.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-hero">
        <h1>
          Build Your Future with <span>Confidence</span>
        </h1>

        <p>
          Whether you are a skilled labourer looking for stable work or a
          contractor searching for trusted manpower — we are here to help.
        </p>

        <div className="home-actions">
          <Link to="/register" className="home-btn primary">
            Create Free Account
          </Link>
          <Link to="/services" className="home-btn secondary">
            View Services
          </Link>
        </div>
      </section>
    </div>
  );
}
