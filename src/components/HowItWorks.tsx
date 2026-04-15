import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Data Integration',
    description: 'Plug into our secure API mesh and connect your existing property databases in seconds.'
  },
  {
    step: '02',
    title: 'Cognitive Analysis',
    description: 'Our AI engine processes millions of signals to score homeowner intent with 94% accuracy.'
  },
  {
    step: '03',
    title: 'Automated Outreach',
    description: 'Launch hyper-personalized nurturing campaigns that turn leads into confirmed appointments.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" style={{ position: 'relative', background: 'rgba(59, 130, 246, 0.02)', padding: '120px 0' }}>
      <div className="container">
        <div className="how-it-works-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '2.5rem', letterSpacing: '-0.04em' }}>
              The Science of <br />
              <span className="gradient-text">Conversion</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3.5rem', fontWeight: '400', lineHeight: '1.7' }}>
              We’ve simplified the most complex AI operations into a seamless three-step pipeline designed for maximum agency growth.
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="glass-card" 
              style={{ padding: '2.5rem', borderLeft: '4px solid var(--primary)', background: 'rgba(59, 130, 246, 0.05)' }}
            >
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-main)', opacity: 0.9, lineHeight: '1.6' }}>
                "The automation handles 90% of our top-of-funnel work, allowing our agents to focus strictly on closing high-intent sellers."
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.2 }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-muted)' }}>Marcus Chen, Principal Broker</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="how-it-works-steps" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.23, 1, 0.32, 1]
                }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="glass-card step-card"
                style={{ display: 'flex', gap: '2.5rem', padding: '3rem', position: 'relative', overflow: 'hidden', border: '1px solid var(--glass-border)' }}
              >
                <div style={{ 
                  fontSize: '6rem', 
                  fontWeight: '900', 
                  color: 'rgba(255,255,255,0.02)', 
                  position: 'absolute', 
                  right: '10px', 
                  top: '-10px',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>{step.step}</div>
                
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: 'white',
                  boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
                }}>{step.step}</div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .step-card {
            padding: 2rem !important;
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
