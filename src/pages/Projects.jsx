import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiShoppingCart, FiImage, FiCheckSquare, FiDatabase, FiSmartphone, FiPieChart, FiGlobe } from 'react-icons/fi';
import './Projects.css';

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, and secure payments.",
    icon: <FiShoppingCart />,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "AI/ML",
    description: "An AI-powered image generation tool using DALL-E API. Users can create unique images from text descriptions.",
    icon: <FiImage />,
    technologies: ["Python", "OpenAI", "Flask", "React"],
    liveLink: "https://ai-image-gen.com",
    githubLink: "https://github.com/username/ai-image"
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Mobile App",
    description: "A cross-platform mobile app for task management with real-time synchronization and team collaboration features.",
    icon: <FiCheckSquare />,
    technologies: ["React Native", "Firebase", "Redux"],
    liveLink: "https://task-app-demo.com",
    githubLink: "https://github.com/username/task-app"
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    category: "Web Development",
    description: "Interactive dashboard for visualizing and analyzing business metrics with real-time updates and customizable widgets.",
    icon: <FiPieChart />,
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    liveLink: "https://analytics-demo.com",
    githubLink: "https://github.com/username/analytics"
  },
  {
    id: 5,
    title: "IoT Management Platform",
    category: "Web Development",
    description: "Centralized platform for managing IoT devices, collecting sensor data, and monitoring device health in real-time.",
    icon: <FiDatabase />,
    technologies: ["React", "Node.js", "MQTT", "MongoDB"],
    liveLink: "https://iot-platform-demo.com",
    githubLink: "https://github.com/username/iot-platform"
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Secure mobile banking application with features like transaction history, bill payments, and account management.",
    icon: <FiSmartphone />,
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    liveLink: "https://banking-app-demo.com",
    githubLink: "https://github.com/username/banking-app"
  }
];

// Categories for filtering
const categories = ["All", "Web Development", "Mobile App", "AI/ML", "UI/UX"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    document.title = 'Our Projects | Logic Loom Lab';
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.h1 
            className="projects-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            className="projects-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of innovative solutions and successful client projects
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-filter">
        <div className="filter-container">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        <div className="projects-container">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}