import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How accurate is the AI lead targeting?',
    answer: 'Our predictive model is over 85% accurate at identifying homeowners who will list their property within the next 12 months.'
  },
  {
    question: 'Can I use LeadFlow AI with my current CRM?',
    answer: 'Yes! We offer native integrations with Follow Up Boss, Salesforce, Sierra Interactive, and many others.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'We don’t offer a traditional free trial, but we do have a 14-day money-back guarantee.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Questions</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{ padding: '0 1.5rem', border: openIndex === index ? '1px solid var(--primary)' : '1px solid var(--glass-border)' }}
            >
              <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', cursor: 'pointer' }} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{faq.question}</h3>
                <ChevronDown size={20} style={{ transform: openIndex === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </div>
              {openIndex === index && (
                <div style={{ paddingBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
