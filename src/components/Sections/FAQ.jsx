import { useState } from 'react';
import { FAQS } from '../../data/constants';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {f.q}
                <span className="toggle">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <div className="faq-a"><p>{f.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}