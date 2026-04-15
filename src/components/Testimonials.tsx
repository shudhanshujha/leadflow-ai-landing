import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Keller Williams Realty',
    content: 'LeadFlow AI completely changed how I source listings. I closed 3 deals in my first month using the platform. The AI targeting is scarily accurate.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Compass Real Estate',
    content: 'The automated follow-up sequences are a lifesaver. It nurtures leads for months until they are ready to talk, and then I just step in to close.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Jessica Martinez',
    role: 'Sotheby’s International Realty',
    content: 'Scaling my team used to be a headache. With LeadFlow, we have a consistent pipeline of high-quality leads that my agents love working with.',
    avatar: 'https://i.pravatar.cc/150?u=jessica'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Success Stories from <span className="gradient-text">Top Agents</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Hear from real estate professionals who have transformed their business with LeadFlow AI.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="glass-card"
              style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', border: '1px solid var(--glass-border)' }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />)}
              </div>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', lineHeight: '1.7', color: 'var(--text-main)', opacity: 0.9 }}>"{testimonial.content}"</p>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ position: 'relative' }}>
                  <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '56px', height: '56px', borderRadius: '16px', objectFit: 'cover', border: '2px solid var(--glass-border)' }} />
                  <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', background: 'var(--primary)', width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--bg-dark)' }}></div>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'white' }}>{testimonial.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
