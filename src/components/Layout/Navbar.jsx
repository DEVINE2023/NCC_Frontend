import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/constants';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => 
        item.toLowerCase().replace(/\s/g, '-')
      );
      
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <h1>NCC</h1>
          <span>Nepal Certifying Company</span>
        </div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            {NAV_ITEMS.map((item, i) => {
              const sectionId = item.toLowerCase().replace(/\s/g, '-');
              return (
                <li key={i}>
                  {item === 'Home' ? (
                    <a 
                      href="#"
                      onClick={handleHomeClick}
                      className={activeSection === 'home' ? 'active' : ''}
                    >
                      {item}
                    </a>
                  ) : (
                    <a 
                      href={`#${sectionId}`}
                      className={activeSection === sectionId ? 'active' : ''}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}