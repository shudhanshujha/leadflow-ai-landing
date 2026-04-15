import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 0 60px' }}>
      <div className="blob" style={{ top: '10%', left: '10%', background: 'var(--primary)', width: '40vw', height: '40vw' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '10%', background: 'var(--secondary)', width: '30vw', height: '30vw', animationDelay: '-5s' }}></div>
      <div className="noise-bg"></div>

      <div className="container">
        <div className="responsive-grid" style={{ gridTemplateColumns: '1.2fr 1fr', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)', marginBottom: '1.5rem' }}>
              <Sparkles size={14} className="gradient-text" />
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.05em' }}>AI REAL ESTATE REVOLUTION</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
              Turn Cold Markets<br />
              <span className="gradient-text">Into Hot Leads</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '550px' }}>
              LeadFlow AI decodes market signals to find motivated sellers before they even list. 
              Automation that feels human.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-premium" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Start Free Trial <ArrowRight size={18} />
              </button>
              <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.8rem 2rem', borderRadius: '100px', color: 'white', fontWeight: '700', cursor: 'pointer' }}>
                Watch Demo
              </button>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ fontSize: '2rem', fontWeight: '800' }}>12k+</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>Leads</p>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--glass-border)', display: 'none' }}></div>
              <div>
                <h4 style={{ fontSize: '2rem', fontWeight: '800' }}>94%</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>Accuracy</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ position: 'relative', y: y1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="glass-card" style={{ width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', gap: '8px' }}>
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                   <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
                 </div>
                 <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>LeadFlow v4.0</div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Target size={24} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Intent</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>High</div>
                  </div>
                  <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Zap size={24} color="var(--accent)" style={{ marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Response</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent)' }}>+42%</div>
                  </div>
                  <div className="glass-card" style={{ gridColumn: 'span 2', padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '1rem' }}>Pipeline Growth</div>
                    <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                       {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                         <div key={i} style={{ flex: 1, background: 'linear-gradient(to top, var(--primary), var(--secondary))', height: `${h}%`, borderRadius: '4px' }}></div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            <motion.div 
              style={{ position: 'absolute', top: '-10px', right: '-10px', rotate: 8 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="glass-card" style={{ padding: '10px 20px', fontSize: '0.8rem', fontWeight: '700', border: '1px solid rgba(39, 201, 63, 0.3)' }}>
                <Shield size={16} color="#27c93f" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Verified
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
