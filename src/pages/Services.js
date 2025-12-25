export default function Services() {
  return (
    <div className="services-page">

      {/* HERO SECTION */}
      <section className="services-hero">
        <h1>
          Our <span>Labour & Contractor</span> Services
        </h1>
        <p>
          We provide reliable labour solutions and verified contractors
          for construction, maintenance, and industrial projects.
        </p>
      </section>

      {/* INTRO */}
      <section className="services-intro">
        <h2>What We Offer</h2>
        <p>
          Our platform bridges the gap between skilled labourers and
          contractors. Whether you need daily wage workers or long-term
          manpower, we ensure fast, transparent, and trusted connections.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-grid">

        <div className="service-card">
          <h3>👷 Skilled Labour Supply</h3>
          <p>
            Electricians, plumbers, masons, carpenters, painters,
            helpers, and more — available on daily or monthly basis.
          </p>
        </div>

        <div className="service-card">
          <h3>🏗 Contractor Hiring</h3>
          <p>
            Hire verified contractors for residential, commercial,
            and industrial construction projects.
          </p>
        </div>

        <div className="service-card">
          <h3>🏭 Industrial Manpower</h3>
          <p>
            Factory workers, machine operators, loaders,
            supervisors, and warehouse staff.
          </p>
        </div>

        <div className="service-card">
          <h3>🔧 Maintenance Services</h3>
          <p>
            AC technicians, electricians, plumbers,
            lift operators, and facility maintenance staff.
          </p>
        </div>

        <div className="service-card">
          <h3>🛡 Security & Support Staff</h3>
          <p>
            Security guards, housekeeping staff,
            cleaners, and support workers.
          </p>
        </div>

        <div className="service-card">
          <h3>📊 Project-Based Workforce</h3>
          <p>
            Manpower solutions tailored for short-term
            and long-term project requirements.
          </p>
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="services-why">
        <h2>Why Choose Us?</h2>

        <ul>
          <li>✅ Verified and experienced workers</li>
          <li>✅ Transparent wages and job details</li>
          <li>✅ Fast hiring and easy communication</li>
          <li>✅ Suitable for small to large projects</li>
          <li>✅ Trusted by contractors across India</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="services-cta">
        <h2>Start Hiring Today</h2>
        <p>
          Join our platform and find the right labour
          or contractor for your next project.
        </p>
        <button>Explore Jobs & Services</button>
      </section>

    </div>
  );
}
