import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <label>Email: </label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Password: </label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
