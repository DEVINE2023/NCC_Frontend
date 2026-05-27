import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../data/constants';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <div className="logo">
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
                  <a 
                    href={`#${sectionId}`}
                    className={activeSection === sectionId ? 'active' : ''}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}