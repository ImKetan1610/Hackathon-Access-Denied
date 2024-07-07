// src/Accordion.js
import React, { useState } from "react";
import "./Faq.css"; // Add some basic CSS

const Accordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleToggle(index)}>
            {faq.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
