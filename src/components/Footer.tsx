import React from 'react';
import { Zap, Send, Globe, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '100px 0 60px', borderTop: '1px solid var(--glass-border)', background: 'rgba(5, 5, 5, 1)', position: 'relative', overflow: 'hidden' }}>
      <div className="blob" style={{ bottom: '-20%', right: '-10%', opacity: 0.03, width: '600px', height: '600px' }}></div>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
          <div style={{ maxWidth: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '800', fontSize: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '8px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={22} fill="white" color="white" />
              </div>
              <span style={{ letterSpacing: '-0.02em' }}>LeadFlow <span className="gradient-text">AI</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Empowering real estate professionals with next-generation AI lead intelligence. 
              Find motivated sellers faster than ever.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {[Send, Globe, MessageSquare].map((Icon, i) => (
                <div key={i} style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <Icon size={20} color="var(--text-muted)" />
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', gridColumn: 'span 2' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem', color: 'white' }}>Product</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                <li><a href="#features" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}>Features</a></li>
                <li><a href="#how-it-works" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}>How it Works</a></li>
                <li><a href="#pricing" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease' }}>Pricing</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem', color: 'white' }}>Company</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>About Us</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Our Blog</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Careers</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2rem', color: 'white' }}>Support</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: 'var(--text-muted)', listStyle: 'none' }}>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Help Center</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Security</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Privacy Policy</a></li>
                <li><a style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s ease', cursor: 'pointer' }}>Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '3rem', borderTop: '1px solid var(--glass-border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>© 2026 LeadFlow AI. Professional Real Estate Intelligence.</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
            <span style={{ color: 'var(--text-muted)' }}>Status: <span style={{ color: '#27c93f' }}>All Systems Operational</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
