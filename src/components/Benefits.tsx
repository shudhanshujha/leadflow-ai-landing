import React from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { icon: <Clock size={18} color="var(--primary)" />, text: 'Save up to 40 hours a week on lead prospecting' },
  { icon: <TrendingUp size={18} color="var(--primary)" />, text: 'Increase lead-to-appointment conversion by 300%' },
  { icon: <Zap size={18} color="var(--primary)" />, text: 'Reduce lead acquisition cost by 50% on average' }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="responsive-grid" style={{ gridTemplateColumns: '1fr 1.2fr', alignItems: 'center', gap: '5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(59, 130, 246, 0.03)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
               <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--glass-border)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ height: '30px', width: '100%', display: 'flex', gap: '10px' }}>
                    <div style={{ height: '30px', width: '30px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '8px' }}></div>
                    <div style={{ flex: 1, height: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}></div>
                  </div>
                  <div style={{ height: '180px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
                    <div style={{ width: '100%', display: 'flex', gap: '6px' }}>
                      {[30, 60, 45, 80, 55, 90, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: 0.2 + (i * 0.1), duration: 1 }}
                          style={{ flex: 1, background: 'var(--primary)', borderRadius: '4px', opacity: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Scale your business without <span className="gradient-text">scaling your effort</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Stop wasting thousands on generic lead platforms. LeadFlow AI delivers high-intent leads that are actually ready to sell their homes.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {benefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ flexShrink: 0, background: 'rgba(59, 130, 246, 0.1)', padding: '10px', borderRadius: '12px', display: 'flex', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    {benefit.icon}
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: '600' }}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
