import React, { useEffect, useState } from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';

const AlertSystem = () => {
  const { gasStatus } = useGasSystem();
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    if (gasStatus.valveOn && !gasStatus.burnerOn) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [gasStatus.valveOn, gasStatus.burnerOn]);
  
  if (gasStatus.gasLeakDetected) {
    return (
      <div className="bg-red-500 text-white p-4 rounded-lg mb-4 animate-pulse">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-bold">EMERGENCY: Gas Leak Detected</span>
        </div>
        <p className="mt-2">
          Please ventilate the area immediately and check your gas connections. Do not use any electrical appliances or flames.
        </p>
      </div>
    );
  }
  
  if (showAlert) {
    return (
      <div className="bg-yellow-500 text-white p-4 rounded-lg mb-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-bold">Warning: Gas valve is ON but burner is OFF</span>
        </div>
        <p className="mt-2">
          Please turn off the gas valve if you're not using it to save gas and ensure safety.
        </p>
      </div>
    );
  }
  
  return null;
};

export default AlertSystem;