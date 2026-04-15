import React from 'react';
import { Rocket, Cpu, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Cpu size={24} style={{ color: 'var(--primary)' }} />,
    title: 'Neural Lead Scoring',
    description: 'Our proprietary LLM analyzes local market sentiment to predict listing intent.'
  },
  {
    icon: <Rocket size={24} style={{ color: 'var(--secondary)' }} />,
    title: 'Hyper-Growth Engine',
    description: 'Scalable infrastructure that handles thousands of concurrent lead sequences.'
  },
  {
    icon: <Globe size={24} style={{ color: 'var(--accent)' }} />,
    title: 'Global Data Mesh',
    description: 'Integrates public records and social signals for a 360-degree view.'
  },
  {
    icon: <Lock size={24} style={{ color: 'var(--primary)' }} />,
    title: 'Encrypted CRM Sync',
    description: 'Military-grade encryption for your sensitive lead data with CRM sync.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.1em' }}>FEATURES</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', marginTop: '1rem' }}>
            Engineering the <span className="gradient-text">Future</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2.5rem 2rem' }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
