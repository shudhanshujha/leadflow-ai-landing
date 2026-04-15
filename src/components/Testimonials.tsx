import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Keller Williams Realty',
    content: 'LeadFlow AI completely changed how I source listings. I closed 3 deals in my first month. The AI targeting is scarily accurate.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Compass Real Estate',
    content: 'The automated follow-up sequences are a lifesaver. It nurtures leads for months until they are ready to talk.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Jessica Martinez',
    role: 'Sotheby’s Realty',
    content: 'Scaling my team used to be a headache. With LeadFlow, we have a consistent pipeline of high-quality leads.',
    avatar: 'https://i.pravatar.cc/150?u=jessica'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', marginBottom: '1rem' }}>Success Stories</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Hear from top real estate professionals.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card"
              style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
              </div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', color: 'var(--text-main)', opacity: 0.9 }}>"{testimonial.content}"</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: 'auto' }}>
                <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800' }}>{testimonial.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{testimonial.role}</p>
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
