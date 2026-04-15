import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, TrendingUp, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 0 80px' }}>
      {/* Animated Background Blobs */}
      <div className="blob" style={{ top: '10%', left: '10%', background: 'var(--primary)', maxWidth: '90vw' }}></div>
      <div className="blob" style={{ bottom: '10%', right: '10%', background: 'var(--secondary)', animationDelay: '-5s', maxWidth: '90vw' }}></div>
      <div className="noise-bg"></div>

      <div className="container">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}
            >
              <Sparkles size={16} className="gradient-text" style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em' }}>AI-POWERED REAL ESTATE REVOLUTION</span>
            </motion.div>

            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '800', lineHeight: '1', marginBottom: '2rem', letterSpacing: '-0.04em' }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ display: 'block' }}
              >
                Turn Cold Markets
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="gradient-text"
                style={{ display: 'block' }}
              >
                Into Hot Leads
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3.5rem', maxWidth: '600px', fontWeight: '400' }}
            >
              LeadFlow AI decodes market signals to find motivated sellers before they even list. 
              Automation that feels human, results that feel like magic.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <button className="btn-premium" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                Start Free Trial <ArrowRight size={20} />
              </button>
              <button style={{ background: 'transparent', border: '1px solid var(--glass-border)', padding: '1rem 2.5rem', borderRadius: '100px', color: 'white', fontWeight: '700', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
              style={{ marginTop: '5rem', display: 'flex', gap: '4rem', alignItems: 'center' }}
            >
              <div>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.25rem' }}>12k+</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Leads Generated</p>
              </div>
              <div style={{ width: '1px', height: '50px', background: 'var(--glass-border)' }}></div>
              <div>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.25rem' }}>94%</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Accuracy Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Abstract Floating Visuals */}
          <motion.div 
            style={{ position: 'relative', y: y1 }}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="glass-card" style={{ width: '100%', minHeight: '520px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', gap: '10px' }}>
                   <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', boxShadow: '0 0 10px rgba(255, 95, 86, 0.5)' }}></div>
                   <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', boxShadow: '0 0 10px rgba(255, 189, 46, 0.5)' }}></div>
                   <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 10px rgba(39, 201, 63, 0.5)' }}></div>
                 </div>
                 <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.05em' }}>LeadFlow Engine v4.0</div>
               </div>

               <div className="hero-visual-grid" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-card" 
                    style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                      <Target size={28} color="var(--primary)" />
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Seller Intent</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800' }}>High</div>
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                    className="glass-card" 
                    style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                      <Zap size={28} color="var(--accent)" />
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Response Rate</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent)' }}>+42%</div>
                  </motion.div>
                  <div className="glass-card hero-pipeline-card" style={{ gridColumn: 'span 2', padding: '2rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '1rem', fontWeight: '800' }}>Pipeline Growth</div>
                        <div style={{ padding: '4px 12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <TrendingUp size={16} color="var(--secondary)" />
                          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--secondary)' }}>+24%</span>
                        </div>
                     </div>
                     <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                        {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 1 + (i * 0.1), duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                            style={{ flex: 1, background: 'linear-gradient(to top, var(--primary), var(--secondary))', borderRadius: '6px 6px 0 0', opacity: 0.8 }}
                          ></motion.div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              style={{ position: 'absolute', top: '-15px', right: '-15px', rotate: 8, zIndex: 5 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass-card" style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid rgba(39, 201, 63, 0.3)', background: 'rgba(39, 201, 63, 0.05)' }}>
                <Shield size={20} color="#27c93f" />
                <span style={{ fontSize: '0.95rem', fontWeight: '700' }}>Verified Sellers Only</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section { padding: 100px 0 60px !important; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-visual-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-pipeline-card {
            grid-column: span 1 !important;
          }
          div[style*="max-width: 600px"] { margin: 0 auto 3rem !important; }
          div[style*="margin-top: 5rem"] { 
            margin-top: 3rem !important;
            justify-content: center !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
