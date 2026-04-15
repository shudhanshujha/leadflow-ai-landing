import React from 'react';
import { Zap, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { icon: <Clock size={20} color="var(--accent-blue)" />, text: 'Save up to 40 hours a week on lead prospecting' },
  { icon: <TrendingUp size={20} color="var(--accent-blue)" />, text: 'Increase lead-to-appointment conversion by 300%' },
  { icon: <Zap size={20} color="var(--accent-blue)" />, text: 'Reduce lead acquisition cost by 50% on average' }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits">
      <div className="container">
        <div className="benefits-grid" style={{ display: 'flex', gap: '5rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{ flex: 1, minWidth: 'min(100%, 300px)' }}
          >
            <div className="glass-card" style={{ width: '100%', minHeight: '400px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'rgba(59, 130, 246, 0.03)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
               {/* Decorative Visual */}
               <div style={{ flex: 1, background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid var(--glass-border)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }}></div>
                  <div style={{ height: '40px', width: '100%', display: 'flex', gap: '1rem', position: 'relative' }}>
                    <div style={{ height: '40px', width: '40px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '12px' }}></div>
                    <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}></div>
                  </div>
                  <div style={{ height: '240px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', padding: '1.5rem' }}>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '80%', background: 'linear-gradient(0deg, rgba(59, 130, 246, 0.15) 0%, transparent 100%)' }}></div>
                    <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
                      {[30, 60, 45, 80, 55, 90, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                          style={{ flex: 1, background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.6 }}
                        />
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            style={{ flex: 1.2, minWidth: 'min(100%, 300px)' }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.1', letterSpacing: '-0.03em' }}
            >
              Scale your business without <span className="gradient-text">scaling your effort</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', fontWeight: '400', lineHeight: '1.7' }}
            >
              Stop wasting thousands on generic lead platforms. LeadFlow AI delivers high-intent leads that are actually ready to sell their homes.
            </motion.p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}
                >
                  <div style={{ flexShrink: 0, background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '14px', display: 'flex', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                    {benefit.icon}
                  </div>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
