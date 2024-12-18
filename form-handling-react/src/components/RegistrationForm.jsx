import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username} // Controlled input
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
