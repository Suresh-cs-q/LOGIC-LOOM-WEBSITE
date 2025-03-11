import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <Link to="/" className="footer-logo">
              LOGIC LOOM LAB
            </Link>
            <p className="footer-description">
              Transforming ideas into powerful digital solutions. We create innovative websites and applications 
              that help businesses grow and succeed in the digital landscape.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/logic-loom-lab/?viewAsMember=true" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/logicloomlab" className="social-link" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/Logic_Loom_Lab" className="social-link" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/Logic_Loom_Lab" className="social-link" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@Logic_loom_Lab" className="social-link" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linktr.ee/Logic_Loom_lab" className="social-link" target="_blank" rel="noopener noreferrer" title="Linktree">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="footer-title">Contact Info</h3>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>843-F Block Jubilee Town Lahore, Pakistan</span>
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+923131136263">+92-313-1136263</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:Suresh-kumar@logicloomlab.tech">Suresh-kumar@logicloomlab.tech</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:Suresh.manghwar@gmail.com">Suresh.manghwar@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-calendar-alt"></i>
                  <a href="https://calendly.com/logicloomlab1/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Meeting
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="footer-title">Business Hours</h3>
              <ul className="footer-hours">
                <li>
                  <span className="day">Monday - Sunday:</span>
                  <span className="hours">Open 24/7</span>
                </li>
                <li>
                  <span className="day">Support:</span>
                  <span className="hours">Always Available</span>
                </li>
              </ul>
              <div className="footer-cta">
                <Link to="/contact" className="footer-cta-button">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Logic Loom Lab. All rights reserved.</p>
          <p>Designed with <i className="fas fa-heart"></i> by Suresh Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 