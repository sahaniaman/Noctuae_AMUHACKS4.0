import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaFire as Flame } from 'react-icons/fa';

const DashboardPage = ({
  gasUsed,
  valveOn,
  burnerOn,
  valveTimer,
  burnerTimer,
  gasLeakDetected,
  toggleValve,
  toggleBurner,
  simulateGasLeak,
}) => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogout = () => {
    // Navigate back to the login page
    navigate('/');
  };

  const handleViewStats = () => {
    // Navigate to the stats page
    navigate('/stats');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-400 to-red-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <Flame className="text-white" size={20} />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">
              Gazo <span className="font-normal">We make your kitchens safe</span>
            </h2>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="mb-6">
            <p className="text-xl mb-2">Gas Used For</p>
            <h3 className="text-6xl font-bold">{gasUsed}</h3>
          </div>

          <div
            className={`flex items-center ${
              gasLeakDetected ? 'bg-red-500' : 'bg-green-500'
            } text-white px-4 py-3 rounded-md mb-4`}
          >
            <span className="text-lg font-semibold">
              {gasLeakDetected ? 'Gas Leak Detected!' : 'No Gas Leak Detected'}
            </span>
          </div>

          <div className="flex items-center bg-green-500 text-white px-4 py-3 rounded-md mb-4">
            <span className="text-lg font-semibold">
              Show Alert if gas is ON but Burner is OFF
            </span>
          </div>

          <button
            onClick={simulateGasLeak}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Simulate Gas Leak
          </button>
        </div>

        {/* Right Section */}
        <div>
          {/* Valve Section */}
          <div className="mb-6">
            <div className="bg-amber-800 text-white font-bold inline-block px-4 py-2 rounded-full mb-2">
              LPG
            </div>
            <h3 className="text-4xl font-bold mb-2">Gas Valve {valveOn ? 'On' : 'Off'}</h3>
            <p>Valve on for: {valveTimer}</p>

            <div className="relative inline-flex items-center cursor-pointer mt-2 mb-6">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={valveOn}
                onChange={toggleValve}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </div>
          </div>

          {/* Burner Section */}
          <div>
            <h3 className="text-4xl font-bold mb-2">Burner {burnerOn ? 'On' : 'Off'}</h3>
            <p>Burner on for: {burnerTimer}</p>

            <div className="relative inline-flex items-center cursor-pointer mt-2">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={burnerOn}
                onChange={toggleBurner}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <button
          onClick={handleViewStats}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          View Stats
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;