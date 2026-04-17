import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            Jack<span className="logo-dot">.</span>
          </Link>

          <button
            className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <Link to="/">Home</Link>
            <a href="/my-portfolio/#about">About</a>
            <a href="/my-portfolio/#projects">Projects</a>
            <a href="/my-portfolio/#contact">Contact</a>
            <Link to="/blog" className="nav-cta">Spring Break Blog</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <footer className="footer">
        <div className="footer-inner">
          <p>&copy; {new Date().getFullYear()} Johannes Vermaak. Built with React + Vite.</p>
          <p className="footer-sub">Oceanside, CA · jackvermaak03@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
