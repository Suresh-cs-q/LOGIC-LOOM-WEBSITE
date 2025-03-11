import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaPalette, FaServer, FaChartLine, FaLightbulb } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Logic Loom Lab';
  }, []);

  const services = [
    {
      id: 'web-development',
      icon: <FaCode />,
      title: 'Web Development',
      description: 'We build custom, responsive websites and web applications that deliver exceptional user experiences and drive business results.',
      benefits: [
        'Custom-built solutions tailored to your specific business needs',
        'Responsive design that works seamlessly across all devices',
        'Performance optimization for fast loading times',
        'SEO-friendly architecture to improve visibility',
        'Scalable solutions that grow with your business'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'Shopify']
    },
    {
      id: 'mobile-apps',
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'We create intuitive, high-performance mobile applications for iOS and Android platforms that engage users and deliver value.',
      benefits: [
        'Native and cross-platform solutions for maximum reach',
        'User-centered design for intuitive navigation and engagement',
        'Offline functionality for uninterrupted user experience',
        'Push notifications to increase user engagement',
        'Seamless integration with existing systems'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify']
    },
    {
      id: 'ui-ux-design',
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'We design beautiful, intuitive user interfaces and experiences that delight users and achieve business objectives.',
      benefits: [
        'User research to understand your target audience',
        'Wireframing and prototyping to validate concepts early',
        'Visual design that aligns with your brand identity',
        'Usability testing to ensure optimal user experience',
        'Accessibility compliance for inclusive design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Principle']
    },
    {
      id: 'cloud-solutions',
      icon: <FaServer />,
      title: 'Cloud Solutions',
      description: 'We provide scalable, secure cloud infrastructure and deployment solutions that optimize performance and reduce costs.',
      benefits: [
        'Scalable architecture that adapts to changing demands',
        'Cost optimization through efficient resource utilization',
        'High availability and disaster recovery planning',
        'Security best practices and compliance',
        'Continuous monitoring and performance optimization'
      ],
      technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'digital-marketing',
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'We develop and execute comprehensive digital marketing strategies that increase visibility, engagement, and conversions.',
      benefits: [
        'Data-driven strategies tailored to your business goals',
        'Multi-channel approach for maximum reach',
        'Content creation that resonates with your audience',
        'Analytics and reporting to measure ROI',
        'Continuous optimization based on performance data'
      ],
      technologies: ['SEO', 'PPC', 'Social Media Marketing', 'Email Marketing', 'Content Marketing', 'Analytics']
    },
    {
      id: 'consulting',
      icon: <FaLightbulb />,
      title: 'IT Consulting',
      description: 'We provide expert advice and guidance on technology strategy, implementation, and optimization to help you achieve your business goals.',
      benefits: [
        'Strategic technology roadmapping aligned with business objectives',
        'Vendor selection and management',
        'Legacy system modernization planning',
        'Digital transformation strategy',
        'Technology stack optimization'
      ],
      technologies: ['Digital Transformation', 'Process Optimization', 'Technology Assessment', 'IT Strategy', 'Enterprise Architecture']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.h1 
            className="services-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="services-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive software development and digital solutions to help your business succeed in the digital age
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="service-item"
                variants={fadeInUp}
              >
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <div>
                    <h2 className="service-title-large">{service.title}</h2>
                    <p className="service-description-large">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-content">
                  <div className="service-benefits">
                    <h3>Key Benefits</h3>
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-technologies">
                    <h3>Technologies</h3>
                    <div className="technologies-list">
                      {service.technologies.map((tech, i) => (
                        <motion.span 
                          key={i} 
                          className="technology-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A structured approach to delivering high-quality solutions that exceed expectations
          </motion.p>

          <div className="process-steps">
            {[
              {
                step: 1,
                title: 'Discovery',
                description: 'We start by understanding your business goals, target audience, and project requirements through in-depth consultations.'
              },
              {
                step: 2,
                title: 'Planning',
                description: 'We create a detailed project plan, including timelines, milestones, and resource allocation to ensure smooth execution.'
              },
              {
                step: 3,
                title: 'Design',
                description: 'Our designers create wireframes and visual designs that align with your brand and provide optimal user experience.'
              },
              {
                step: 4,
                title: 'Development',
                description: 'Our developers build your solution using the latest technologies and best practices, with regular progress updates.'
              },
              {
                step: 5,
                title: 'Testing',
                description: 'We conduct thorough testing to ensure your solution is bug-free, secure, and performs optimally across all platforms.'
              },
              {
                step: 6,
                title: 'Deployment',
                description: 'We deploy your solution to production, ensuring a smooth launch and providing training if needed.'
              },
              {
                step: 7,
                title: 'Support',
                description: 'We provide ongoing support and maintenance to ensure your solution continues to perform optimally.'
              }
            ].map((step, index) => (
              <motion.div 
                key={step.step}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how our services can help you achieve your digital goals and drive growth.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="cta-button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 