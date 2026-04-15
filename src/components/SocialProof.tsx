import React from 'react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  const logos = ['Acme Corp', 'Global Real Estate', 'Pioneer Realty', 'Peak Properties', 'Metro Homes', 'Century Realty', 'Prime Estate', 'Skyline Brokers'];
  
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.01)', overflow: 'hidden' }}>
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '3.5rem' }}>
          Trusted by 500+ top-tier real estate agencies
        </p>
        
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            style={{ display: 'flex', gap: '6rem', whiteSpace: 'nowrap', width: 'max-content' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-muted)', opacity: 0.4, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center' }}>
                {logo}
              </span>
            ))}
          </motion.div>
          
          {/* Gradient Masks */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100%', background: 'linear-gradient(90deg, var(--bg-dark), transparent)', zIndex: 2 }}></div>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100%', background: 'linear-gradient(-90deg, var(--bg-dark), transparent)', zIndex: 2 }}></div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
