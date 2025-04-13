import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser as User, FaEnvelope as Mail, FaLock as Lock } from 'react-icons/fa';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/');
  };

  const handleSignIn = () => {
    console.log('Sign In button clicked'); // Debugging log
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-400 to-red-200 p-6">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-black">SMART</span>{' '}
        <span className="text-white bg-red-500 px-2 py-1 rounded">GAS SAFETY SYSTEM</span>
      </h1>
      <h2 className="text-3xl font-bold mb-2">Welcome to Gazo</h2>
      <p className="text-xl mb-12">We make your kitchens safe</p>

      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center border-b border-gray-400">
          <User className="mr-2 text-gray-600" size={20} />
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 px-1 bg-transparent focus:outline-none"
          />
        </div>

        <div className="mb-4 flex items-center border-b border-gray-400">
          <Mail className="mr-2 text-gray-600" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-1 bg-transparent focus:outline-none"
          />
        </div>

        <div className="mb-8 flex items-center border-b border-gray-400">
          <Lock className="mr-2 text-gray-600" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-1 bg-transparent focus:outline-none"
          />
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-red-500 text-white font-semibold py-3 px-4 rounded-full mb-4 hover:bg-red-600 transition duration-300"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="px-4 text-gray-500">or</div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full border border-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-full hover:bg-gray-50 transition duration-300"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;