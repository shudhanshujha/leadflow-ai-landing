import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0,
      left: 0,
      right: 0,
      width: '100%', 
      zIndex: 1000, 
      transition: 'all 0.4s ease',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(3, 3, 3, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.25rem', cursor: 'pointer' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
            width: '36px', 
            height: '36px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(59, 130, 246, 0.2)',
            flexShrink: 0
          }}>
            <Zap size={20} fill="white" color="white" />
          </div>
          <span style={{ letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>LeadFlow <span className="gradient-text">AI</span></span>
        </div>

        {/* Links - We hide them on mobile using a simple CSS class we'll add to index.css */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Features', 'How it Works', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: 'var(--text-muted)', 
                transition: 'color 0.3s ease',
                textDecoration: 'none'
              }}
            >
              {item}
            </a>
          ))}
          <button className="btn-premium" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
