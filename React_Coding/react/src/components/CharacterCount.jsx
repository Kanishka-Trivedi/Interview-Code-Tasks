import React, { useState } from 'react';

function CharacterCount() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Character Counter</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCount;
