import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiCalendar } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

/*
 * ===== IMPORTANT: EmailJS Setup Instructions for Gmail =====
 * 
 * To make the contact form work with EmailJS and your Gmail account:
 * 
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 
 * 2. Create a new Email Service with Gmail:
 *    - Go to Email Services tab and click "Add New Service"
 *    - Select "Gmail" as your email provider
 *    - Sign in to your Google account when prompted
 *    - You may see a security warning from Google - click "Advanced" and then "Go to EmailJS (unsafe)" to proceed
 *    - Grant the necessary permissions to EmailJS
 *    - Note down the Service ID (e.g., "service_abc123")
 * 
 * 3. Gmail-Specific Setup:
 *    - If you use 2-factor authentication with Gmail, you'll need to create an App Password:
 *      a. Go to your Google Account > Security > 2-Step Verification
 *      b. Scroll down to "App passwords"
 *      c. Create a new app password for "Mail" and "Other (Custom name)"
 *      d. Use this password instead of your regular Gmail password when setting up the EmailJS service
 * 
 * 4. Create a new Email Template:
 *    - Go to Email Templates tab and click "Create New Template"
 *    - Design your email template with the following variables:
 *      {{from_name}} - Sender's name
 *      {{from_email}} - Sender's email
 *      {{from_phone}} - Sender's phone
 *      {{subject}} - Email subject
 *      {{message}} - Email message
 *      {{to_email}} - Your email address (Suresh.Manghwar@gmail.com)
 *    - Note down the Template ID (e.g., "template_xyz789")
 * 
 * 5. Get your User ID (Public Key):
 *    - Go to Account > API Keys
 *    - Copy your Public Key
 * 
 * 6. Replace the placeholder values below with your actual IDs:
 *    - EMAILJS_SERVICE_ID: Your Service ID from step 2
 *    - EMAILJS_TEMPLATE_ID: Your Template ID from step 4
 *    - EMAILJS_USER_ID: Your Public Key from step 5
 * 
 * 7. Test the form to ensure emails are being sent correctly
 * 
 * 8. Troubleshooting Gmail Issues:
 *    - Check your Gmail spam folder regularly
 *    - Make sure you've granted all necessary permissions to EmailJS
 *    - Try sending a test email directly from the EmailJS dashboard
 *    - For more help, see the README-EMAILJS.md file
 */

// EmailJS constants - replace these with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = "service_ulq584u"; // Your Gmail Service ID from EmailJS
const EMAILJS_TEMPLATE_ID = "template_m74nwtk"; // Your EmailJS Template ID
const EMAILJS_USER_ID = "3tmln3qBmGoNoPCw7"; // Your EmailJS User ID (Public Key)

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Logic Loom Lab';
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      ...formStatus,
      loading: true
    });

    // Get form data
    const formDataToSend = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "Suresh.Manghwar@gmail.com"
    };

    // First try EmailJS
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formDataToSend
      );
      
      handleSuccessfulSubmission();
    } catch (error) {
      console.error("Error sending email via EmailJS:", error);
      
      // Fallback method: Use browser's mailto functionality
      try {
        const subject = encodeURIComponent(`Website Contact: ${formData.subject}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );
        
        // Create a hidden link and click it
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:Suresh.Manghwar@gmail.com?subject=${subject}&body=${body}`;
        mailtoLink.style.display = 'none';
        document.body.appendChild(mailtoLink);
        mailtoLink.click();
        document.body.removeChild(mailtoLink);
        
        handleSuccessfulSubmission();
      } catch (finalError) {
        // All methods failed
        setFormStatus({
          submitted: true,
          success: false,
          message: 'There was an error sending your message. Please email us directly at Suresh.Manghwar@gmail.com',
          loading: false
        });
      }
    }
  };

  // Helper function for successful form submission
  const handleSuccessfulSubmission = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      loading: false
    });
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of digital services including web development, mobile app development, UI/UX design, digital marketing, and more. Our team specializes in creating custom solutions tailored to your specific business needs.'
    },
    {
      question: 'How much does a typical project cost?',
      answer: 'Project costs vary depending on the scope, complexity, and timeline. We provide detailed quotes after an initial consultation to understand your requirements. We offer competitive pricing and flexible payment options to accommodate different budgets.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines depend on the complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. We\'ll provide a detailed timeline during our project planning phase.'
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. Our support includes regular updates, security patches, performance optimization, and technical assistance.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.h1 
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a question or want to work together? We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-subtitle">
                Reach out to us using any of the following methods. We're here to help with your digital needs.
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <FiMapPin className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h3 className="contact-detail-title">Our Location</h3>
                  <p className="contact-detail-text">843-F Block Jubilee Town Lahore, Pakistan</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <FiPhone className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h3 className="contact-detail-title">Phone Number</h3>
                  <a href="tel:+923131136263" className="contact-detail-link">+92-313-1136263</a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <FiMail className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h3 className="contact-detail-title">Email Address</h3>
                  <div>
                    <p>Business: <a href="mailto:Suresh-kumar@logicloomlab.tech" className="contact-detail-link">Suresh-kumar@logicloomlab.tech</a></p>
                    <p>CEO: <a href="mailto:Suresh.manghwar@gmail.com" className="contact-detail-link">Suresh.manghwar@gmail.com</a></p>
                  </div>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <FiClock className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h3 className="contact-detail-title">Business Hours</h3>
                  <p className="contact-detail-text">Open 24/7, all days of the week</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <FiCalendar className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h3 className="contact-detail-title">Schedule a Meeting</h3>
                  <a href="https://calendly.com/logicloomlab1/30min" className="contact-detail-link" target="_blank" rel="noopener noreferrer">
                    Book a 30-minute free consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="form-title">Send Us a Message</h2>
            
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="to_email" value="Suresh.manghwar@gmail.com" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="form-submit"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find answers to common questions about our services and process</p>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <i className={`faq-icon ${openFaq === index ? 'fas fa-minus' : 'fas fa-plus'}`}></i>
                </div>
                {openFaq === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-contact">
        <div className="cta-contact-container">
          <h2 className="cta-contact-title">Ready to Start Your Project?</h2>
          <p className="cta-contact-text">
            Let's create something amazing together. Schedule a free consultation to discuss your project needs.
          </p>
          <a href="https://calendly.com/logicloomlab1/30min" className="cta-contact-button" target="_blank" rel="noopener noreferrer">
            Schedule a Meeting
          </a>
        </div>
      </section>
    </motion.div>
  );
}