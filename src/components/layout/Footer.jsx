import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLink, 
         FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="footer-top" variants={itemVariants}>
          <motion.div className="footer-branding" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <Link to="/" className="footer-logo">
                LOGIC LOOM LAB
                <motion.span 
                  className="logo-underline"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </Link>
            </motion.div>
            
            <motion.p className="footer-description" variants={itemVariants}>
              Transforming ideas into powerful digital solutions. We create innovative websites and applications 
              that help businesses grow and succeed in the digital landscape.
            </motion.p>
            
            <motion.div className="footer-social" variants={itemVariants}>
              <motion.a 
                href="https://www.linkedin.com/company/logic-loom-lab/?viewAsMember=true" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn"
                custom={0}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn />
              </motion.a>
              
              <motion.a 
                href="https://www.facebook.com/logicloomlab" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Facebook"
                custom={1}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              
              <motion.a 
                href="https://x.com/Logic_Loom_Lab" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="X (Twitter)"
                custom={2}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              
              <motion.a 
                href="https://www.instagram.com/Logic_Loom_Lab" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram"
                custom={3}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              
              <motion.a 
                href="https://www.youtube.com/@Logic_loom_Lab" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="YouTube"
                custom={4}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
              
              <motion.a 
                href="https://linktr.ee/Logic_Loom_lab" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Linktree"
                custom={5}
                variants={socialVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLink />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <motion.div className="footer-links-column" variants={itemVariants}>
              <motion.h3 className="footer-title" variants={itemVariants}>
                Contact Info
                <motion.span 
                  className="title-underline"
                  initial={{ width: 0 }}
                  animate={{ width: "50px" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.h3>
              
              <motion.ul className="footer-contact" variants={containerVariants}>
                <motion.li 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <FaMapMarkerAlt className="footer-icon" />
                  <span>843-F Block Jubilee Town Lahore, Pakistan</span>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <FaPhoneAlt className="footer-icon" />
                  <a href="tel:+923131136263">+92-313-1136263</a>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <FaEnvelope className="footer-icon" />
                  <a href="mailto:Suresh-kumar@logicloomlab.tech">Suresh-kumar@logicloomlab.tech</a>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <FaEnvelope className="footer-icon" />
                  <a href="mailto:Suresh.manghwar@gmail.com">Suresh.manghwar@gmail.com</a>
                </motion.li>
                
                <motion.li 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <FaCalendarAlt className="footer-icon" />
                  <a href="https://calendly.com/logicloomlab1/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Meeting
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
            
            <motion.div className="footer-links-column" variants={itemVariants}>
              <motion.h3 className="footer-title" variants={itemVariants}>
                Business Hours
                <motion.span 
                  className="title-underline"
                  initial={{ width: 0 }}
                  animate={{ width: "50px" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.h3>
              
              <motion.ul className="footer-hours" variants={containerVariants}>
                <motion.li variants={itemVariants}>
                  <span className="day">Monday - Sunday:</span>
                  <span className="hours">Open 24/7</span>
                </motion.li>
                
                <motion.li variants={itemVariants}>
                  <span className="day">Support:</span>
                  <span className="hours">Always Available</span>
                </motion.li>
              </motion.ul>
              
              <motion.div 
                className="footer-cta" 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="footer-cta-button">
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaArrowUp className="cta-icon" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            © {currentYear} Logic Loom Lab. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            Designed with{' '}
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#ff6b6b', '#f06595', '#ff6b6b']
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5 
              }}
              style={{ display: 'inline-block' }}
            >
              <FaHeart className="heart-icon" />
            </motion.span>
            {' '}by Suresh Kumar
          </motion.p>
        </motion.div>
      </motion.div>
      
      {showScrollTop && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer; 