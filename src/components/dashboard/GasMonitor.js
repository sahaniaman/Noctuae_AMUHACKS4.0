import React from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';

const GasMonitor = () => {
  const { 
    gasUsedTime, 
    gasLeakDetected, 
    formatTime, 
    simulateGasLeak 
  } = useGasSystem();

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow">
      <h2 className="text-lg mb-2">Gas Used For</h2>
      <div className="text-5xl font-bold mb-4">{formatTime(gasUsedTime)}</div>
      
      <div className={`mb-4 rounded-md px-4 py-3 flex items-center ${
        gasLeakDetected ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
      }`}>
        <span className="mr-2">🔋</span>
        <span>{gasLeakDetected ? 'Gas Leak Detected!' : 'No Gas Leak Detected'}</span>
      </div>
      
      <div className="mb-4 rounded-md px-4 py-3 flex items-center bg-green-500 text-white">
        <span className="mr-2">🔋</span>
        <span>Show Alert if gas is ON but Burner is OFF</span>
      </div>
      
      <button 
        onClick={simulateGasLeak} 
        className="mt-2 text-sm text-gray-500 hover:text-gray-700"
      >
        (Simulate Gas Leak for Testing)
      </button>
    </div>
  );
};

export default GasMonitor;