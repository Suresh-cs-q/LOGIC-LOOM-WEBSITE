import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiAward, 
  FiCheckCircle, 
  FiGlobe,
  FiUser,
  FiDatabase,
  FiCpu,
  FiCloud,
  FiMonitor,
  FiSmartphone,
  FiGrid,
  FiServer
} from 'react-icons/fi';
import './Clients.css';

// Stats data
const stats = [
  {
    icon: <FiUsers />,
    number: "150+",
    label: "Happy Clients"
  },
  {
    icon: <FiAward />,
    number: "200+",
    label: "Projects Completed"
  },
  {
    icon: <FiCheckCircle />,
    number: "98%",
    label: "Success Rate"
  },
  {
    icon: <FiGlobe />,
    number: "15+",
    label: "Countries Served"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc",
    text: "Working with Logic Loom Lab was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations. The team's expertise in both design and development is truly remarkable.",
    icon: <FiUser />
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "DataFlow Systems",
    text: "The team at Logic Loom Lab delivered an exceptional product that transformed our data processing capabilities. Their technical expertise and project management skills made the entire process smooth and efficient.",
    icon: <FiDatabase />
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager",
    company: "AI Solutions Co",
    text: "We were impressed by Logic Loom Lab's ability to understand our complex requirements and deliver a solution that perfectly matched our needs. Their AI expertise and innovative approach set them apart.",
    icon: <FiCpu />
  }
];

// Company logos data
const companies = [
  {
    name: "CloudTech Solutions",
    icon: <FiCloud />
  },
  {
    name: "Digital Dynamics",
    icon: <FiMonitor />
  },
  {
    name: "Mobile Innovations",
    icon: <FiSmartphone />
  },
  {
    name: "Data Systems Inc",
    icon: <FiGrid />
  },
  {
    name: "Tech Infrastructure",
    icon: <FiServer />
  }
];

export default function Clients() {
  useEffect(() => {
    document.title = 'Our Clients | Logic Loom Lab';
  }, []);

  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero">
        <div className="container">
          <motion.h1 
            className="clients-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Success Stories
          </motion.h1>
          <motion.p 
            className="clients-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Read what our clients have to say about their experience working with us
            </motion.p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="client-info">
                  <div className="client-icon">
                    {testimonial.icon}
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-position">{testimonial.position}</p>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="trusted-by-container">
          <motion.h3 
            className="trusted-by-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted By Industry Leaders
          </motion.h3>
          <div className="company-logos">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="company-logo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="logo-icon">
                  {company.icon}
                </div>
                <span className="company-name">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 