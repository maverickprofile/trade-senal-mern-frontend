import React, { useState } from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'What is Tradesenal?', answer: 'Tradesenal is an online trading academy designed to help individuals learn how to trade and invest in the financial markets.' },
    { question: 'Who can benefit from Tradesenal’s courses?', answer: 'Our courses are designed for individuals of all skill levels—whether you’re a beginner or an experienced trader.' },
    { question: 'How do I sign up for a course?', answer: 'Visit our website, browse courses, create an account, and complete your purchase.' },
    { question: 'What is a prop trading firm?', answer: 'A prop trading firm funds traders to trade financial markets using the firm’s capital.' },
    { question: 'Are your courses live or on-demand?', answer: 'We offer both live webinars and on-demand courses.' },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq" id="faq">
      <section className="faq-section">
        <div className="faq-left">
          <h2 className="faq-title">Our Most Asked Questions</h2>
          <p className="faq-description">Check out our most frequently asked questions here or click below to see all FAQs.</p>
          <button className="faq-button">See All FAQs</button>
        </div>
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon" style={{ transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)' }}>➤</span>
              </div>
              <p className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;