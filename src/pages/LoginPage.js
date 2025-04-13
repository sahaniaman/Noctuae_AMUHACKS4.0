import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaFire as Flame, FaEnvelope as Mail, FaLock as Lock } from 'react-icons/fa'; // Import icons

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    // Navigate to the dashboard after login
    navigate('/dashboard');
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-400 to-red-200 p-6">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-black">SMART</span>{' '}
        <span className="text-white bg-red-500 px-2 py-1 rounded">GAS SAFETY SYSTEM</span>
      </h1>

      <div className="flex items-center mb-8">
        <div className="bg-white p-4 rounded-full">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <Flame className="text-white" size={30} />
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-3xl font-bold mb-2">Welcome to Gazo</h2>
          <p className="text-xl">We make your kitchens safe</p>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center border-b border-gray-400">
          <Mail className="mr-2 text-gray-600" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-2 px-1 bg-transparent focus:outline-none"
          />
        </div>

        <div className="mb-2 flex items-center border-b border-gray-400">
          <Lock className="mr-2 text-gray-600" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-1 bg-transparent focus:outline-none"
          />
        </div>

        <div className="text-right mb-8">
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white font-semibold py-3 px-4 rounded-full mb-4 hover:bg-red-600 transition duration-300"
        >
          Log in
        </button>

        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="px-4 text-gray-500">or</div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full border border-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-full hover:bg-gray-50 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;