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
      width: '100%', 
      zIndex: 100, 
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(3, 3, 3, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', cursor: 'pointer' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
            width: '40px', 
            height: '40px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(59, 130, 246, 0.2)'
          }}>
            <Zap size={22} fill="white" color="white" />
          </div>
          <span style={{ letterSpacing: '-0.02em' }}>LeadFlow <span className="gradient-text">AI</span></span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              style={{ 
                fontSize: '0.9rem', 
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
          <button className="btn-premium" style={{ padding: '0.75rem 1.75rem', fontSize: '0.9rem' }}>
            Book Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <motion.span
            animate={{ 
              rotate: isOpen ? 45 : 0, 
              y: isOpen ? 8 : 0,
              backgroundColor: isOpen ? '#ffffff' : '#ffffff'
            }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '2px', background: 'white', display: 'block', transformOrigin: 'center' }}
          />
          <motion.span
            animate={{ 
              opacity: isOpen ? 0 : 1,
              x: isOpen ? 20 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '2px', background: 'white', display: 'block' }}
          />
          <motion.span
            animate={{ 
              rotate: isOpen ? -45 : 0, 
              y: isOpen ? -8 : 0,
              backgroundColor: isOpen ? '#ffffff' : '#ffffff'
            }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '2px', background: 'white', display: 'block', transformOrigin: 'center' }}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: 'rgba(3, 3, 3, 0.8)',
                backdropFilter: 'blur(12px)',
                zIndex: 998
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{ 
                position: 'fixed', 
                top: 0, 
                right: 0, 
                width: 'min(340px, 85vw)', 
                height: '100vh', 
                background: 'var(--bg-dark)', 
                padding: '8rem 2rem 2rem', 
                borderLeft: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                zIndex: 999,
                boxShadow: '-10px 0 50px rgba(0,0,0,0.5)'
              }}
            >
              {['Features', 'How it Works', 'Pricing', 'Testimonials'].map((item, index) => (
                <motion.a 
                  key={item} 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    textDecoration: 'none', 
                    color: 'white',
                    padding: '0.5rem 0'
                  }}
                >
                  {item} <ChevronRight size={20} color="var(--primary)" />
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-premium" 
                style={{ width: '100%', marginTop: '2rem' }}
              >
                Book Demo
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
        
        .mobile-toggle {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 6px;
          width: 30px;
          height: 24px;
          justify-content: center;
          z-index: 1001;
          position: relative;
        }

        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
