import React from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';

const UsageChart = () => {
  const { usageData, timeView } = useGasSystem();
  
  // Calculate max value for scaling
  const maxValue = Math.max(...usageData.map(item => item.usage || 0));
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-medium mb-4">Gas Usage</h3>
      
      <div className="flex items-end h-48 space-x-2">
        {usageData.map((data, index) => {
          const height = maxValue ? (data.usage / maxValue) * 100 : 0;
          
          return (
            <div 
              key={index} 
              className="flex-1 flex flex-col items-center"
            >
              <div 
                className="w-full bg-orange-500 rounded-t-sm" 
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs mt-1 text-gray-500">
                {timeView === 'hourly' && data.time}
                {timeView === 'weekly' && data.day}
                {timeView === 'monthly' && `Day ${data.day}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsageChart;