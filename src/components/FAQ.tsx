import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How accurate is the AI lead targeting?',
    answer: 'Our predictive model is over 85% accurate at identifying homeowners who will list their property within the next 12 months, based on proprietary data points and market behavior.'
  },
  {
    question: 'Can I use LeadFlow AI with my current CRM?',
    answer: 'Yes! We offer native integrations with Follow Up Boss, Salesforce, Sierra Interactive, and many others. We also have Zapier support for everything else.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'We don’t offer a traditional free trial, but we do have a 14-day money-back guarantee. If you’re not satisfied with the lead quality, we’ll refund your first month.'
  },
  {
    question: 'What is the commitment level?',
    answer: 'Our Starter and Pro plans are month-to-month with no long-term contracts. Enterprise plans are custom-quoted based on your specific requirements.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Everything you need to know about our AI-powered lead generation system.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card" 
              style={{ padding: '0 2rem', overflow: 'hidden', border: openIndex === index ? '1px solid var(--primary)' : '1px solid var(--glass-border)' }}
            >
              <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.75rem 0', cursor: 'pointer' }} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: openIndex === index ? 'white' : 'var(--text-main)', transition: 'color 0.3s ease' }}>{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ChevronDown size={24} color={openIndex === index ? 'var(--primary)' : 'var(--text-muted)'} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p style={{ color: 'var(--text-muted)', paddingBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: '400' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
