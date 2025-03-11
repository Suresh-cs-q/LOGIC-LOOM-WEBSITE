import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaPalette, FaServer, FaChartLine, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import './Home.css';
// Fix for linter: explicitly use motion in a comment to show it's used in JSX
// eslint-disable-next-line no-unused-vars
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const highlightVariants = {
    initial: { width: "0%" },
    animate: { 
      width: "100%", 
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 } 
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <motion.div 
            className="hero-shape hero-shape-1"
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="hero-shape hero-shape-2"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 30, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="hero-shape hero-shape-3"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15, 
              ease: "easeInOut" 
            }}
          />
        </div>

        <div className="hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-title" variants={itemVariants}>
              Innovative <span className="text-highlight">
                Digital Solutions
                <motion.span 
                  className="highlight-bg"
                  variants={highlightVariants}
                  initial="initial"
                  animate="animate"
                ></motion.span>
              </span> for Your Business
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Logic Loom Lab is a premier software agency delivering tailored digital solutions that drive innovation and growth. Specializing in custom web development, iOS/Android app development, and user-centered UI/UX design, we craft seamless digital experiences. Our expertise extends to scalable cloud solutions, data-driven digital marketing, and strategic IT consulting services to optimize workflows and elevate your brand. Partner with us to transform complex challenges into competitive advantages with cutting-edge technology and measurable results.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                  <motion.span
                    className="btn-icon"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to="/services" className="btn btn-outline">Our Services</Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              ease: [0.25, 0.1, 0.25, 1] 
            }}
          >
            <motion.div
              className="cta-glow"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.2)",
                  "0 0 40px rgba(255, 255, 255, 0.4)",
                  "0 0 20px rgba(255, 255, 255, 0.2)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Ready to accelerate your digital success? Contact Logic Loom Lab today and let's build your future.
            </motion.p>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 1.5, 
                duration: 0.8,
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
            >
              <Link to="/contact" className="btn btn-secondary btn-contact">
                Contact Us
                <motion.span
                  className="btn-icon"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
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