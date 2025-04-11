import React, { useState } from 'react';

function ToggleText() {
  const [show, setShow] = useState(true);

  const toggleText = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button onClick={toggleText}>
        {show ? 'Hide' : 'Show'} Text
      </button>
      {show && <p>Hello World</p>}
    </div>
  );
}

export default ToggleText;
