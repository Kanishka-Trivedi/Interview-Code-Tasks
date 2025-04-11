import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Cleanup on unmount or when `isRunning` changes
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer: {seconds} s</h1>
      <button onClick={start} disabled={isRunning}>Start</button>{' '}
      <button onClick={stop} disabled={!isRunning}>Stop</button>{' '}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
