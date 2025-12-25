import { Target, Eye, Award, Users,  Shield, Heart, Zap, CheckCircle, Building2, HardHat, Briefcase, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="value-icon" />,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our dealings"
    },
    {
      icon: <Award className="value-icon" />,
      title: "Quality Excellence",
      description: "Committed to delivering superior quality in every project we undertake"
    },
    {
      icon: <Heart className="value-icon" />,
      title: "Customer First",
      description: "Your satisfaction and success are at the heart of everything we do"
    },
    {
      icon: <Zap className="value-icon" />,
      title: "Innovation",
      description: "Constantly evolving and adopting new technologies to serve you better"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started with a vision to revolutionize labour contracting services"
    },
    {
      year: "2012",
      title: "1000+ Workers",
      description: "Expanded our workforce to over 1000 skilled professionals"
    },
    {
      year: "2015",
      title: "National Presence",
      description: "Extended operations across major cities in India"
    },
    {
      year: "2018",
      title: "Digital Platform Launch",
      description: "Launched our online platform for seamless contractor management"
    },
    {
      year: "2020",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management"
    },
    {
      year: "2025",
      title: "5000+ Workers",
      description: "Growing strong with 5000+ skilled workers and 500+ contractors"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "RK",
      description: "20+ years of experience in construction and labour management"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      image: "PS",
      description: "Expert in workforce optimization and project coordination"
    },
    {
      name: "Amit Patel",
      position: "Technology Head",
      image: "AP",
      description: "Leading our digital transformation and platform innovation"
    },
    {
      name: "Sneha Reddy",
      position: "HR & Training Manager",
      image: "SR",
      description: "Ensuring quality through comprehensive training programs"
    }
  ];

  const achievements = [
    {
      icon: <Users className="achievement-icon" />,
      number: "5000+",
      label: "Skilled Workers"
    },
    {
      icon: <Building2 className="achievement-icon" />,
      number: "1200+",
      label: "Projects Completed"
    },
    {
      icon: <HardHat className="achievement-icon" />,
      number: "500+",
      label: "Verified Contractors"
    },
    {
      icon: <Award className="achievement-icon" />,
      number: "98%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Building Dreams, One Project at a Time
          </p>
          <p className="about-hero-description">
            For over 15 years, we've been connecting skilled workers with quality projects, 
            ensuring excellence in every collaboration
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-content">
            <h2 className="about-section-title">Our Story</h2>
            <div className="about-story-text">
              <p>
                Founded in 2009, Labour & Contractor Platform began with a simple yet powerful vision: 
                to bridge the gap between skilled workers and quality construction projects. What started 
                as a small labour contracting service has grown into one of India's most trusted platforms 
                for workforce management.
              </p>
              <p>
                Our journey has been marked by consistent growth, unwavering commitment to quality, and 
                a deep understanding of the construction industry's evolving needs. Today, we proudly serve 
                thousands of clients across the nation, with a network of over 5,000 skilled workers and 
                500+ verified contractors.
              </p>
              <p>
                We believe in the power of skilled labour and the importance of providing workers with 
                dignified employment opportunities. Our platform not only connects workers with projects 
                but also ensures fair wages, safe working conditions, and opportunities for skill development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="about-mission-section">
        <div className="about-mission-container">
          <div className="about-mission-card">
            <Target className="about-mission-icon" />
            <h3 className="about-mission-title">Our Mission</h3>
            <p className="about-mission-text">
              To empower the construction industry by providing access to skilled, verified workers 
              and contractors while ensuring quality, safety, and fair employment practices. We strive 
              to be the most trusted platform that transforms how projects and workers connect.
            </p>
          </div>

          <div className="about-vision-card">
            <Eye className="about-vision-icon" />
            <h3 className="about-vision-title">Our Vision</h3>
            <p className="about-vision-text">
              To become India's leading labour and contractor management platform, recognized for 
              excellence, innovation, and our commitment to building a better future for workers 
              and businesses alike. We envision a world where every worker has access to quality 
              employment and every project has access to skilled professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values-section">
        <div className="about-values-container">
          <h2 className="about-section-title">Our Core Values</h2>
          <p className="about-section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements-section">
        <div className="about-achievements-container">
          <h2 className="about-section-title">Our Achievements</h2>
          <p className="about-section-subtitle">
            Numbers that speak for our commitment and success
          </p>
          <div className="about-achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="about-achievement-card">
                <div className="about-achievement-icon-wrapper">
                  {achievement.icon}
                </div>
                <div className="about-achievement-number">{achievement.number}</div>
                <div className="about-achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="about-timeline-section">
        <div className="about-timeline-container">
          <h2 className="about-section-title">Our Journey</h2>
          <p className="about-section-subtitle">
            Key milestones in our growth story
          </p>
          <div className="about-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="about-timeline-item">
                <div className="about-timeline-marker">
                  <div className="about-timeline-dot"></div>
                  {index !== milestones.length - 1 && (
                    <div className="about-timeline-line"></div>
                  )}
                </div>
                <div className="about-timeline-content">
                  <div className="about-timeline-year">{milestone.year}</div>
                  <h3 className="about-timeline-title">{milestone.title}</h3>
                  <p className="about-timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team-section">
        <div className="about-team-container">
          <h2 className="about-section-title">Meet Our Team</h2>
          <p className="about-section-subtitle">
            The passionate people behind our success
          </p>
          <div className="about-team-grid">
            {team.map((member, index) => (
              <div key={index} className="about-team-card">
                <div className="about-team-avatar">
                  {member.image}
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <div className="about-team-position">{member.position}</div>
                <p className="about-team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="about-why-section">
        <div className="about-why-container">
          <h2 className="about-section-title">Why Choose Us</h2>
          <div className="about-why-grid">
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">Verified Professionals</h3>
                <p className="about-why-text">All workers and contractors are thoroughly vetted and background-checked</p>
              </div>
            </div>
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">Quality Assurance</h3>
                <p className="about-why-text">We maintain strict quality standards for all projects</p>
              </div>
            </div>
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">24/7 Support</h3>
                <p className="about-why-text">Round-the-clock customer support for all your needs</p>
              </div>
            </div>
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">Fair Practices</h3>
                <p className="about-why-text">Committed to fair wages and ethical employment practices</p>
              </div>
            </div>
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">Safety First</h3>
                <p className="about-why-text">Full insurance coverage and safety compliance</p>
              </div>
            </div>
            <div className="about-why-item">
              <CheckCircle className="about-why-icon" />
              <div>
                <h3 className="about-why-title">Quick Deployment</h3>
                <p className="about-why-text">Fast and efficient workforce deployment for your projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="about-cta-section">
        <div className="about-cta-card">
          <h2 className="about-cta-title">Ready to Work With Us?</h2>
          <p className="about-cta-text">
            Join thousands of satisfied clients who trust us with their projects
          </p>
          <div className="about-contact-info">
            <div className="about-contact-item">
              <Phone className="about-contact-icon" />
              <div>
                <div className="about-contact-label">Call Us</div>
                <div className="about-contact-value">+91-XXXXX-XXXXX</div>
              </div>
            </div>
            <div className="about-contact-item">
              <Mail className="about-contact-icon" />
              <div>
                <div className="about-contact-label">Email Us</div>
                <div className="about-contact-value">info@labourcontractor.com</div>
              </div>
            </div>
            <div className="about-contact-item">
              <MapPin className="about-contact-icon" />
              <div>
                <div className="about-contact-label">Visit Us</div>
                <div className="about-contact-value">Main Street, Delhi, India</div>
              </div>
            </div>
          </div>
          <div className="about-cta-buttons">
            <button className="about-btn-primary">
              <Phone className="about-btn-icon" />
              Contact Us
            </button>
            <button className="about-btn-secondary">
              Get Started
            </button>
          </div>
          <div className="about-social-links">
            <a href="#" className="about-social-link">
              <Linkedin className="about-social-icon" />
            </a>
            <a href="#" className="about-social-link">
              <Twitter className="about-social-icon" />
            </a>
            <a href="#" className="about-social-link">
              <Facebook className="about-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}