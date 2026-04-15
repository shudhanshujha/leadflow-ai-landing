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
    <section id="how-it-works" style={{ position: 'relative', background: 'rgba(59, 130, 246, 0.02)', padding: '100px 0' }}>
      <div className="container">
        <div className="responsive-grid" style={{ gridTemplateColumns: '1fr 1.2fr', alignItems: 'center', gap: '5rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '2rem' }}>
              The Science of <br />
              <span className="gradient-text">Conversion</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.7' }}>
              We’ve simplified the most complex AI operations into a seamless three-step pipeline designed for maximum agency growth.
            </p>
            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)', background: 'rgba(59, 130, 246, 0.05)' }}>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-main)', opacity: 0.9 }}>
                "The automation handles 90% of our top-of-funnel work, allowing our agents to focus strictly on closing high-intent sellers."
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.2 }}></div>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Marcus Chen, Principal Broker</span>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
                style={{ display: 'flex', gap: '1.5rem', padding: '2rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.1rem',
                  fontWeight: '900',
                  color: 'white'
                }}>{step.step}</div>
                
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
