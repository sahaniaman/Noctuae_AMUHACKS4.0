import React from 'react';
import { useGasSystem } from '../../hooks/useGasSystem';

const ActivityLog = () => {
  const { activityLogs } = useGasSystem();
  
  // Helper function to determine icon based on log type
  const getIconForLogType = (type) => {
    if (type.includes('Valve')) {
      return (
        <div className="bg-amber-100 p-2 rounded-lg">
          <svg className="w-6 h-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      );
    } else if (type.includes('Burner')) {
      return (
        <div className="bg-orange-100 p-2 rounded-lg">
          <svg className="w-6 h-6 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        </div>
      );
    } else if (type.includes('Leak')) {
      return (
        <div className="bg-red-100 p-2 rounded-lg">
          <svg className="w-6 h-6 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      );
    }
    
    return (
      <div className="bg-gray-100 p-2 rounded-lg">
        <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    );
  };
  
  // Helper function to determine background color based on log type
  const getLogItemColor = (type) => {
    if (type.includes('OFF')) {
      return 'bg-orange-100';
    } else if (type.includes('ON')) {
      return 'bg-green-100';
    } else if (type.includes('Leak')) {
      return 'bg-red-100';
    }
    return 'bg-gray-100';
  };
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Daily Usage Log</h3>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>10 November 2025</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {activityLogs.map((log, index) => (
          <div 
            key={index} 
            className={`${getLogItemColor(log.type)} p-3 rounded-lg flex items-center`}
          >
            {getIconForLogType(log.type)}
            <div className="ml-3">
              <p className="font-medium">{log.type}</p>
              <p className="text-sm text-gray-500">{log.formattedTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;