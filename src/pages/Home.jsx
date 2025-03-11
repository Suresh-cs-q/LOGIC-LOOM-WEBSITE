import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaPalette, FaServer, FaChartLine, FaLightbulb, FaArrowRight, FaUsers, FaMicrochip, FaHandshake, FaChartBar } from 'react-icons/fa';
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
        <div className="services-bg-shapes">
          <motion.div 
            className="services-shape services-shape-1"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="services-shape services-shape-2"
            animate={{ 
              x: [0, 30, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 25,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="services-header"
          >
            <motion.h2 
              className="services-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Services
              <motion.span 
                className="services-title-underline"
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            <motion.p 
              className="services-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We offer a comprehensive range of software development and digital services
            </motion.p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.2 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="service-icon-wrapper"
                  whileHover={{ 
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="service-icon"
                    initial={{ background: "var(--primary-light)" }}
                    whileHover={{ 
                      background: "var(--primary-color)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ color: "var(--primary-color)" }}
                      whileHover={{ 
                        color: "var(--white)",
                        scale: 1.2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="service-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="service-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div
                  className="service-link-wrapper"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Link to={service.link} className="service-link">
                    Learn More
                    <motion.span
                      className="service-link-arrow"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="service-card-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 0.7,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
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
  // Icons for the cards
  const cardIcons = [
    <FaUsers key="users" />,
    <FaMicrochip key="microchip" />,
    <FaHandshake key="handshake" />,
    <FaChartBar key="chart" />,
    <FaLightbulb key="lightbulb" />
  ];
  
  return (
    <section className="why-choose-section">
      <div className="why-choose-bg">
        <motion.div 
          className="why-choose-shape why-choose-shape-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="why-choose-shape why-choose-shape-2"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="why-choose-container">
        <motion.div 
          className="why-choose-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 
            className="why-choose-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose Us
            <motion.span 
              className="why-choose-title-underline"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          <motion.p 
            className="why-choose-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            What sets us apart from other software development agencies
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="why-choose-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {[
            {
              number: "01",
              title: "Expert Team",
              description: "Our team consists of experienced developers, designers, and strategists who are passionate about creating exceptional digital experiences."
            },
            {
              number: "02",
              title: "Cutting-Edge Technology",
              description: "We stay at the forefront of technology trends to deliver modern, scalable, and future-proof solutions for our clients."
            },
            {
              number: "03",
              title: "Client-Centric Approach",
              description: "We prioritize understanding your business goals and challenges to deliver solutions that address your specific needs."
            },
            {
              number: "04",
              title: "Proven Results",
              description: "Our track record of successful projects and satisfied clients speaks to our commitment to excellence and results."
            },
            {
              number: "05",
              title: "Innovative Solutions",
              description: "We think outside the box to create innovative solutions that help your business stand out in today's competitive digital landscape."
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="why-choose-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + (index * 0.1),
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="card-highlight"
                initial={{ height: "100%" }}
              />
              
              <motion.div 
                className="card-number"
                initial={{ opacity: 0.1, scale: 1 }}
                whileHover={{ 
                  opacity: 0.2, 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                {item.number}
              </motion.div>
              
              <motion.div className="card-content">
                <motion.h3 
                  className="card-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {item.title}
                  <motion.span
                    className="card-title-highlight"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30px" }}
                    transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                  />
                </motion.h3>
                
                <motion.p 
                  className="card-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="card-icon"
                whileHover={{ 
                  rotate: 10,
                  scale: 1.1,
                  background: "var(--gradient-primary)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  initial={{ color: "var(--primary-color)" }}
                  whileHover={{ 
                    color: "var(--white)",
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {cardIcons[index]}
                </motion.div>
              </motion.div>
              
              <motion.div
                className="card-glow"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 0.1,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 