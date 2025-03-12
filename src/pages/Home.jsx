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
              <span className="text-dark">Innovative Digital</span>{" "}
              <span className="text-white">Solutions for Your</span>{" "}
              <span className="text-dark">Business</span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              <motion.span 
                className="company-name"
                initial={{ color: "var(--white)" }}
                animate={{ 
                  color: ["var(--white)", "#ffcc00", "var(--white)"],
                  textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 12px rgba(255,204,0,0.7)", "0 0 0px rgba(255,255,255,0)"]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
              >
                <strong>Logic Loom Lab</strong>
              </motion.span> is a premier software agency delivering <strong>tailored digital solutions</strong> that drive innovation and growth. Specializing in <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>custom web development</strong></motion.span>, <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>iOS/Android app development</strong></motion.span>, and <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>user-centered UI/UX design</strong></motion.span>, we craft seamless digital experiences. Our expertise extends to <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>scalable cloud solutions</strong></motion.span>, <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>data-driven digital marketing</strong></motion.span>, and <motion.span 
                className="highlight-service"
                whileHover={{ 
                  color: "#ffcc00",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "0 5px",
                  borderRadius: "4px",
                  textShadow: "0 0 5px rgba(255, 204, 0, 0.5)"
                }}
              ><strong>strategic IT consulting</strong></motion.span> services to optimize workflows and elevate your brand. Partner with us to <motion.span
                initial={{ opacity: 1 }}
                animate={{ 
                  color: ["var(--white)", "#ffcc00", "var(--white)"],
                  textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 10px rgba(0,0,0,0.8)", "0 0 0px rgba(0,0,0,0)"],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatDelay: 3
                }}
              ><strong>transform complex challenges into competitive advantages</strong></motion.span> with cutting-edge technology and measurable results.
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
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="cta-glow-effect"
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(255, 255, 255, 0.1)",
                  "0 0 50px rgba(255, 255, 255, 0.2)",
                  "0 0 30px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
            />
            <div className="cta-text">
              <motion.h2 
                className="cta-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Start Your <span className="cta-highlight">Project</span>?
              </motion.h2>
              <motion.p 
                className="cta-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's discuss how we can help bring your ideas to life and create 
                digital solutions that drive real results.
              </motion.p>
            </div>
            <motion.div 
              className="cta-actions"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="cta-button">
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="cta-shape-1"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 40, ease: "linear" },
            scale: { repeat: Infinity, duration: 15, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="cta-shape-2"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { repeat: Infinity, duration: 50, ease: "linear" },
            scale: { repeat: Infinity, duration: 20, ease: "easeInOut" }
          }}
        />
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