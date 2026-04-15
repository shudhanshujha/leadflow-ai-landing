import React from 'react';
import { Rocket, Cpu, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Cpu className="gradient-text" size={32} style={{ color: 'var(--primary)' }} />,
    title: 'Neural Lead Scoring',
    description: 'Our proprietary LLM analyzes local market sentiment and property history to predict listing intent.'
  },
  {
    icon: <Rocket className="gradient-text" size={32} style={{ color: 'var(--secondary)' }} />,
    title: 'Hyper-Growth Engine',
    description: 'Scalable infrastructure that handles thousands of concurrent lead nurturing sequences without lag.'
  },
  {
    icon: <Globe className="gradient-text" size={32} style={{ color: 'var(--accent)' }} />,
    title: 'Global Data Mesh',
    description: 'Integrates public records, social signals, and transit data for a 360-degree view of every lead.'
  },
  {
    icon: <Lock className="gradient-text" size={32} style={{ color: 'var(--primary)' }} />,
    title: 'Encrypted CRM Sync',
    description: 'Military-grade encryption for your sensitive lead data with 99.9% uptime for all major integrations.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', letterSpacing: '0.2em' }}
          >
            CUTTING EDGE TECHNOLOGY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '1rem' }}
          >
            Engineering the <span className="gradient-text">Future of Real Estate</span>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-card"
              style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.15) + 0.3 }}
                style={{ 
                width: '64px', 
                height: '64px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '2rem',
                border: '1px solid var(--glass-border)'
              }}>
                {feature.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.25rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
