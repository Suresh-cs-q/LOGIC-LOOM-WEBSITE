import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
