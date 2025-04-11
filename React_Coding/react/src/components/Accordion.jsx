import React, { useState } from 'react';

const data = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is useState?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension that lets you write HTML inside JavaScript.',
  },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ width: '60%', margin: '2rem auto', textAlign: 'left' }}>
      <h2>FAQ</h2>
      {data.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggle(index)}
            style={{
              cursor: 'pointer',
              background: '#f1f1f1',
              padding: '1rem',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div style={{ padding: '1rem', background: '#fff', border: '1px solid #ccc' }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
