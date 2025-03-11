import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaPalette, FaServer, FaChartLine, FaLightbulb } from 'react-icons/fa';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'LOGIC LOOM LAB - Innovative Software Solutions';
  }, []);

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      link: '/services#web-development'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      link: '/services#mobile-apps'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'User-centered design that enhances user experience and engagement.',
      link: '/services#ui-ux-design'
    },
    {
      icon: <FaServer />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      link: '/services#cloud-solutions'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to grow your online presence.',
      link: '/services#digital-marketing'
    },
    {
      icon: <FaLightbulb />,
      title: 'IT Consulting',
      description: 'Expert advice on technology strategy and implementation.',
      link: '/services#consulting'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Innovative <span className="text-highlight">Digital Solutions</span> for Your Business
            </h1>
            <p className="hero-description">
              Logic Loom Lab is a premier software agency delivering tailored digital solutions that drive innovation and growth. Specializing in custom web development, iOS/Android app development, and user-centered UI/UX design, we craft seamless digital experiences. Our expertise extends to scalable cloud solutions, data-driven digital marketing, and strategic IT consulting services to optimize workflows and elevate your brand. Partner with us to transform complex challenges into competitive advantages with cutting-edge technology and measurable results.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>Ready to accelerate your digital success? Contact Logic Loom Lab today and let's build your future.</p>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of software development and digital services
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's discuss how we can help bring your ideas to life and create 
                digital solutions that drive real results.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="cta-button">
                Get in Touch
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="cta-shape-1"></div>
        <div className="cta-shape-2"></div>
      </section>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">Why Choose Us</h2>
          <p className="why-choose-subtitle">
            What sets us apart from other software development agencies
          </p>
        </div>
        
        <div className="why-choose-grid">
          <div className="why-choose-card" style={{ '--animation-order': 0 }}>
            <div className="card-number">01</div>
            <div className="card-content">
              <h3 className="card-title">Expert Team</h3>
              <p className="card-description">
                Our team consists of experienced developers, designers, and strategists 
                who are passionate about creating exceptional digital experiences.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
          </div>

          <div className="why-choose-card" style={{ '--animation-order': 1 }}>
            <div className="card-number">02</div>
            <div className="card-content">
              <h3 className="card-title">Cutting-Edge Technology</h3>
              <p className="card-description">
                We stay at the forefront of technology trends to deliver modern, 
                scalable, and future-proof solutions for our clients.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-microchip"></i>
            </div>
          </div>

          <div className="why-choose-card" style={{ '--animation-order': 2 }}>
            <div className="card-number">03</div>
            <div className="card-content">
              <h3 className="card-title">Client-Centric Approach</h3>
              <p className="card-description">
                We prioritize understanding your business goals and challenges 
                to deliver solutions that address your specific needs.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-handshake"></i>
            </div>
          </div>

          <div className="why-choose-card" style={{ '--animation-order': 3 }}>
            <div className="card-number">04</div>
            <div className="card-content">
              <h3 className="card-title">Proven Results</h3>
              <p className="card-description">
                Our track record of successful projects and satisfied clients 
                speaks to our commitment to excellence and results.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 