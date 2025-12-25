
import { Users, HardHat, Wrench, Building2, CheckCircle, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Users className="service-icon" />,
      title: "Skilled Labour Supply",
      description: "Experienced workers for construction, manufacturing, and industrial projects"
    },
    {
      icon: <HardHat className="service-icon" />,
      title: "General Contractors",
      description: "Professional contractors for residential and commercial construction"
    },
    {
      icon: <Wrench className="service-icon" />,
      title: "Specialized Tradesmen",
      description: "Plumbers, electricians, carpenters, and other skilled professionals"
    },
    {
      icon: <Building2 className="service-icon" />,
      title: "Project Management",
      description: "Complete project oversight from planning to completion"
    }
  ];

  const features = [
    "Pre-verified and background-checked workers",
    "Flexible hiring options (daily, weekly, monthly)",
    "Competitive pricing with no hidden fees",
    "24/7 customer support",
    "Insurance and safety compliance",
    "Quick deployment of workforce"
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Labour & Contractor Services
          </h1>
          <p className="hero-subtitle">
            Your trusted partner for skilled workforce and professional contractors
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <CheckCircle className="feature-icon" />
                <p className="feature-text">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Skilled Workers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1200+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Contact us today for a free consultation and quote
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <Phone className="btn-icon" />
              Call Us Now
            </button>
            <button className="btn-secondary">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}