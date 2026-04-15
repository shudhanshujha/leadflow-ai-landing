import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Growth',
    price: '299',
    period: '/mo',
    features: ['50 AI leads/mo', 'Neural scoring', 'CRM sync', 'Email support']
  },
  {
    name: 'Elite',
    price: '599',
    period: '/mo',
    popular: true,
    features: ['200 AI leads/mo', 'Predictive analysis', 'Advanced CRM mesh', '24/7 Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited leads', 'Custom AI training', 'Full white-labeling', 'API Access']
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={{ padding: '100px 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '800', marginBottom: '1rem' }}>Transparent <span className="gradient-text">Scaling</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Simple growth, no hidden fees.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ 
                padding: '3rem 2rem', 
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--glass-border)',
                background: plan.popular ? 'rgba(59, 130, 246, 0.04)' : 'var(--bg-card)'
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '900' }}>{plan.price !== 'Custom' ? `$${plan.price}` : plan.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>{plan.period}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {plan.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Check size={16} color="var(--primary)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={plan.popular ? 'btn-premium' : ''} style={{ 
                width: '100%', 
                padding: '1rem', 
                borderRadius: '100px',
                background: plan.popular ? '' : 'rgba(255,255,255,0.05)',
                border: plan.popular ? 'none' : '1px solid var(--glass-border)',
                color: 'white',
                fontWeight: '700',
                cursor: 'pointer'
              }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Growth'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
