import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Growth',
    price: '299',
    period: '/mo',
    description: 'Perfect for local agents looking to scale their listing pipeline.',
    features: ['50 AI-qualified leads/mo', 'Neural intent scoring', 'Standard CRM sync', '2 automation sequences', 'Email support'],
    badge: 'STARTUP'
  },
  {
    name: 'Elite',
    price: '599',
    period: '/mo',
    description: 'The industry standard for high-producing teams and brokerages.',
    popular: true,
    features: ['200 AI-qualified leads/mo', 'Predictive behavioral analysis', 'Advanced real-time CRM mesh', 'Unlimited automations', '24/7 Priority support', 'Monthly strategy call'],
    badge: 'MOST POPULAR'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Bespoke AI solutions for multi-state real estate franchises.',
    features: ['Unlimited leads', 'Custom AI model training', 'Full white-labeling', 'Dedicated Success Manager', 'API Access'],
    badge: 'FRANCHISE'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, width: '800px', height: '800px' }}></div>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>Simple, <span className="gradient-text">Transparent</span> Scaling</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>No hidden setup fees. No long-term lock-ins. Just growth.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '3rem', alignItems: 'stretch' }}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className={`glass-card ${plan.popular ? 'popular-card' : ''}`}
              style={{ 
                padding: '4.5rem 2.5rem 3.5rem', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                background: plan.popular ? 'rgba(59, 130, 246, 0.04)' : 'var(--bg-card)',
                boxShadow: plan.popular ? '0 30px 60px rgba(59, 130, 246, 0.15)' : 'none'
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                background: plan.popular ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255,255,255,0.08)',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: '800',
                letterSpacing: '0.12em',
                boxShadow: plan.popular ? '0 10px 20px rgba(59, 130, 246, 0.3)' : 'none',
                zIndex: 2
              }}>
                {plan.badge}
              </div>

              <div style={{ marginBottom: '3.5rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.25rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '1.5rem' }}>
                  {plan.price !== 'Custom' && <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-muted)' }}>$</span>}
                  <span style={{ fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>{plan.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: '600' }}>{plan.period}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '400' }}>{plan.description}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', flex: 1 }}>
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                  >
                    <div style={{ background: 'rgba(39, 201, 63, 0.15)', padding: '4px', borderRadius: '50%', display: 'flex', marginTop: '2px' }}>
                      <Check size={14} color="#27c93f" />
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)', opacity: 0.9 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                className={plan.popular ? 'btn-premium' : ''} 
                style={{ 
                  width: '100%', 
                  padding: '1.25rem', 
                  borderRadius: '100px',
                  background: plan.popular ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255,255,255,0.05)',
                  border: plan.popular ? 'none' : '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  boxShadow: plan.popular ? '0 15px 30px rgba(59, 130, 246, 0.25)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                  }
                }}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Growth'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginTop: '10rem', display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap', opacity: 0.7 }}
        >
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                <Users size={24} color="var(--primary)" />
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Join 5,000+ Agents</span>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                <Star size={24} color="var(--accent)" fill="var(--accent)" />
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>4.9/5 Average Rating</span>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
                <Zap size={24} color="var(--secondary)" />
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Instant Deployment</span>
           </div>
        </motion.div>

      </div>

      <style>{`
        .popular-card {
          transform: scale(1.05);
          z-index: 10;
        }
        @media (max-width: 1024px) {
          .popular-card { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
