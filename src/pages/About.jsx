import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiTarget, FiTrendingUp, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';
import './About.css';

// Import CEO image
import ceoImage from '../assets/ceo-image.jpg';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Your Agency';
  }, []);

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Our Agency
          </motion.h1>
          <motion.p 
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're a passionate team of experts dedicated to transforming businesses through innovative digital solutions.
          </motion.p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="ceo-section">
        <div className="ceo-container">
          <motion.div 
            className="ceo-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={ceoImage} alt="Suresh Kumar - CEO" className="ceo-image" />
          </motion.div>
          
          <motion.div 
            className="ceo-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="ceo-intro">
              <h2 className="ceo-name">Suresh Kumar</h2>
              <p className="ceo-position">CEO & Founder</p>
            </div>
            
            <p className="ceo-description">
              As the founder and CEO, I bring a wealth of experience and a passion for innovation to our agency. 
              My vision is to help businesses transform their digital presence and achieve remarkable growth through 
              cutting-edge solutions tailored to their unique needs. With a background in technology and business strategy, 
              I lead our team in delivering exceptional results for our clients.
            </p>
            
            <div className="ceo-contact">
              <a href="mailto:Suresh.manghwar@gmail.com" className="contact-item">
                <FiMail className="contact-icon" />
                <span>Suresh.manghwar@gmail.com</span>
              </a>
              
              <a href="tel:+923131136263" className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+92-313-1136263</span>
              </a>
              
              <a href="https://www.linkedin.com/in/sureshkumar-cs/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <FiLinkedin className="contact-icon" />
                <span>linkedin.com/in/sureshkumar-cs</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <motion.h2 
            className="vision-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Vision & Values
          </motion.h2>
          
          <motion.div 
            className="vision-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="vision-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiTarget className="vision-icon" />
              <h3 className="vision-card-title">Our Mission</h3>
              <p className="vision-card-text">
                To empower businesses with innovative digital solutions that drive growth, enhance customer engagement, and create lasting value in an ever-evolving digital landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="vision-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiTrendingUp className="vision-icon" />
              <h3 className="vision-card-title">Our Vision</h3>
              <p className="vision-card-text">
                To be the leading digital agency known for transformative solutions, exceptional creativity, and measurable results that consistently exceed client expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="vision-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiUsers className="vision-icon" />
              <h3 className="vision-card-title">Our Approach</h3>
              <p className="vision-card-text">
                We believe in collaborative partnerships, data-driven strategies, and agile methodologies that allow us to deliver tailored solutions with transparency and excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="vision-title">Our Story</h2>
              <p className="story-text">
                Founded with a passion for digital excellence, our agency has grown from a small team of dedicated professionals to a full-service digital powerhouse. We've helped countless businesses transform their online presence and achieve remarkable growth.
              </p>
              <p className="story-text">
                Our journey has been defined by continuous innovation, learning, and adaptation to the ever-changing digital landscape. We pride ourselves on staying ahead of industry trends and leveraging cutting-edge technologies to deliver exceptional results for our clients.
              </p>
              <p className="story-text">
                Today, we continue to expand our expertise and services, always with the same core mission: to help businesses thrive in the digital world through strategic, creative, and technical excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="about-image-placeholder">
                <span>Our Journey</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <motion.h2 
            className="vision-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expertise
          </motion.h2>
          
          <motion.div 
            className="expertise-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="expertise-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiGlobe className="expertise-icon" />
              <h3 className="expertise-title">Web Development</h3>
              <p className="expertise-text">
                Custom websites and web applications built with the latest technologies to deliver exceptional user experiences and business results.
              </p>
            </motion.div>
            
            <motion.div 
              className="expertise-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiAward className="expertise-icon" />
              <h3 className="expertise-title">UI/UX Design</h3>
              <p className="expertise-text">
                User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="expertise-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiTrendingUp className="expertise-icon" />
              <h3 className="expertise-title">Digital Marketing</h3>
              <p className="expertise-text">
                Strategic marketing solutions that increase visibility, drive traffic, and convert visitors into loyal customers.
              </p>
            </motion.div>
            
            <motion.div 
              className="expertise-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiUsers className="expertise-icon" />
              <h3 className="expertise-title">Branding</h3>
              <p className="expertise-text">
                Comprehensive branding services that help businesses establish a strong identity and connect with their target audience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}