import React from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';
import { toggleBurner } from '../../services/gasMonitoringService';
import { useAuth } from '../../hooks/useAuth';

const BurnerControl = () => {
  const { currentUser } = useAuth();
  const { gasStatus } = useGasSystem();
  
  const handleToggleBurner = async () => {
    try {
      await toggleBurner(currentUser.uid, !gasStatus.burnerOn);
    } catch (error) {
      console.error('Error toggling burner:', error);
      // Implement error handling notification
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <div className="border border-gray-300 inline-block p-2 rounded-lg mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold">Burner {gasStatus.burnerOn ? 'On' : 'Off'}</h3>
          <p className="text-gray-600">Burner on for: {gasStatus.burnerOnTime}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative inline-block w-12 h-6 mb-4">
            <input 
              type="checkbox" 
              className="hidden"
              checked={gasStatus.burnerOn}
              onChange={handleToggleBurner}
              id="burner-switch"
            />
            <label 
              htmlFor="burner-switch"
              className={`absolute cursor-pointer rounded-full w-full h-full ${gasStatus.burnerOn ? 'bg-red-500' : 'bg-gray-300'} transition-colors duration-300 ease-in-out`}
            >
              <span 
                className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ease-in-out ${gasStatus.burnerOn ? 'translate-x-6' : ''}`}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnerControl;