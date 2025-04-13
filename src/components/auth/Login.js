import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase'; // Ensure firebase.js is correctly configured

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('gazo@gmail.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Authenticate with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      onSuccess(); // Navigate to the dashboard on success
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <svg
            className="h-5 w-5 mr-2 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <label className="text-gray-700">Email</label>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
          placeholder="gazo@gmail.com"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-2 justify-between">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <label className="text-gray-700">Password</label>
          </div>
          <button type="button" className="text-sm text-red-500 hover:underline">
            Forgot Password?
          </button>
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition duration-300"
      >
        Log In
      </button>

      <div className="mt-4 text-center text-gray-500">
        <p>or</p>
      </div>

      <button
        type="button"
        className="w-full mt-4 border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;