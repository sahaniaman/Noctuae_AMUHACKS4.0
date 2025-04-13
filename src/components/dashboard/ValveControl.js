import React from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';

const ValveControl = () => {
  const { gasValveOn, valveOnTime, toggleGasValve, formatTime } = useGasSystem();

  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-4 shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-amber-700 text-white px-4 py-1 rounded-full">
          LPG
        </div>
        <div className="text-3xl font-bold">Valve On</div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">⚙️</span>
        </div>
        <div>
          <p>Valve on for: {formatTime(valveOnTime)}</p>
          <label className="relative inline-flex items-center cursor-pointer mt-2">
            <input 
              type="checkbox" 
              checked={gasValveOn}
              onChange={toggleGasValve}
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ValveControl;