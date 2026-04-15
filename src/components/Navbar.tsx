import React, { useState, useEffect } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

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
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      background: scrolled ? 'rgba(3, 3, 3, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative',
        width: '100%'
      }}>
        
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

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: 'var(--text-muted)', 
                transition: 'color 0.3s ease',
                position: 'relative'
              }}
              className="nav-item"
            >
              {item}
            </a>
          ))}
          <button className="btn-premium" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
            Book Demo
          </button>
        </div>
      </div>

      <style>{`
        .nav-item:hover { color: white !important; }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .nav-item:hover::after { width: 100%; }
        
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
