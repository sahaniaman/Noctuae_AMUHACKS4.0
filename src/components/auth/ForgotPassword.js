import React, { useState } from 'react';

const ForgotPassword = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    
    // Simulate password reset request
    setIsSubmitted(true);
    setMessage('Password reset link has been sent to your email');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      
      {isSubmitted ? (
        <div className="text-center">
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{message}</div>
          <p className="mb-4">Check your email for the password reset link.</p>
          <button 
            onClick={onSwitch}
            className="text-red-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {message && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{message}</div>}
          
          <p className="mb-4 text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <label className="text-gray-700">Email</label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition duration-300"
          >
            Reset Password
          </button>
          
          <div className="mt-4 text-center">
            <button 
              type="button" 
              onClick={onSwitch}
              className="text-red-500 hover:underline"
            >
              Back to Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;