import { Users, HardHat, Wrench, Building2, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Award, TrendingUp, Star, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Users className="service-icon" />,
      title: "Skilled Labour Supply",
      description: "Experienced workers for construction, manufacturing, and industrial projects with verified skills and backgrounds"
    },
    {
      icon: <HardHat className="service-icon" />,
      title: "General Contractors",
      description: "Professional contractors for residential and commercial construction projects of all sizes"
    },
    {
      icon: <Wrench className="service-icon" />,
      title: "Specialized Tradesmen",
      description: "Plumbers, electricians, carpenters, welders, and other certified skilled professionals"
    },
    {
      icon: <Building2 className="service-icon" />,
      title: "Project Management",
      description: "Complete project oversight from planning to completion with dedicated project managers"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="feature-icon" />,
      title: "Pre-verified Workers",
      description: "All workers are background-checked and skill-verified"
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Flexible Hiring",
      description: "Daily, weekly, or monthly hiring options available"
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Full Insurance",
      description: "Comprehensive insurance and safety compliance"
    },
    {
      icon: <Award className="feature-icon" />,
      title: "Quality Assured",
      description: "High-quality work guaranteed on every project"
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Competitive Pricing",
      description: "Best rates with no hidden fees or charges"
    },
    {
      icon: <Phone className="feature-icon" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support available"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd.",
      rating: 5,
      text: "Outstanding service! They provided skilled workers on short notice for our project. Highly professional and reliable."
    },
    {
      name: "Priya Sharma",
      company: "Sharma Builders",
      rating: 5,
      text: "Best labour contractor service in the area. Workers are skilled, punctual, and the pricing is very competitive."
    },
    {
      name: "Amit Patel",
      company: "Patel Industries",
      rating: 5,
      text: "We've been working with them for 2 years. Excellent quality and always deliver on time. Highly recommended!"
    }
  ];

  const workProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Reach out via phone, email, or our website with your requirements"
    },
    {
      step: "2",
      title: "Consultation",
      description: "We discuss your project needs and provide a detailed quote"
    },
    {
      step: "3",
      title: "Worker Assignment",
      description: "We assign the best-suited skilled workers for your project"
    },
    {
      step: "4",
      title: "Project Execution",
      description: "Our team completes your project with quality and on time"
    }
  ];

  return (
    <div className="contractor-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Labour & Contractor Services
          </h1>
          <p className="hero-subtitle">
            Your trusted partner for skilled workforce and professional contractors
          </p>
          <p className="hero-description">
            Providing quality labour and contractor services across all industries with over 5000+ skilled workers ready to serve
          </p>
          <div className="hero-buttons">
            <button className="hero-btn-primary">
              <Phone className="btn-icon" />
              Call Now: +91-XXXXX-XXXXX
            </button>
            <button className="hero-btn-secondary">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">Comprehensive labour and contractor solutions for all your project needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">
                Learn More <ArrowRight className="arrow-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">We are committed to providing the best labour and contractor services</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Work Process Section */}
      <div className="process-section">
        <div className="section-header">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">Simple and transparent process from start to finish</p>
        </div>
        <div className="process-grid">
          {workProcess.map((process, index) => (
            <div key={index} className="process-card">
              <div className="process-step">{process.step}</div>
              <h3 className="process-title">{process.title}</h3>
              <p className="process-description">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Skilled Workers</div>
            <p className="stat-description">Verified and experienced professionals</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">1200+</div>
            <div className="stat-label">Projects Completed</div>
            <p className="stat-description">Successfully delivered projects</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
            <p className="stat-description">Happy and returning clients</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
            <p className="stat-description">Industry expertise and knowledge</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real feedback from satisfied customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div>
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">
            Contact us today for a free consultation and detailed quote
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <div className="contact-label">Call Us</div>
                <div className="contact-value">+91-XXXXX-XXXXX</div>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <div className="contact-label">Email Us</div>
                <div className="contact-value">info@labour.com</div>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <div className="contact-label">Visit Us</div>
                <div className="contact-value">Main Street, City</div>
              </div>
            </div>
          </div>
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