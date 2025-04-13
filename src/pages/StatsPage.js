import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<img src="/assets/images/gazo-logo.png" alt="Gazo Logo" />

const StatsPage = () => {
  const [timeRange, setTimeRange] = useState('hourly');
  const [usageData, setUsageData] = useState([]);
  const [activityLogs, setActivityLogs] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    // Generate random usage data
    const generateUsageData = () => {
      if (timeRange === 'hourly') {
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 70) + 30);
      } else if (timeRange === 'weekly') {
        return Array.from({ length: 7 }, () => Math.floor(Math.random() * 70) + 30);
      } else {
        return Array.from({ length: 12 }, () => Math.floor(Math.random() * 70) + 30);
      }
    };
    
    setUsageData(generateUsageData());
    
    // Mock activity logs
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const time = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')} AM`;
    
    setActivityLogs([
      { type: 'valve-on', timestamp: `${formattedDate} • ${time}`, message: 'Gas Valve Turned ON' },
      { type: 'valve-off', timestamp: `${formattedDate} • ${time}`, message: 'Gas Valve Turned OFF' },
      { type: 'leak', timestamp: `${formattedDate} • ${time}`, message: 'Gas Leak' },
      { type: 'burner-on', timestamp: `${formattedDate} • ${time}`, message: 'Burner Turned ON' },
      { type: 'burner-off', timestamp: `${formattedDate} • ${time}`, message: 'Burner Turned OFF' }
    ]);
  }, [timeRange]);

  // Get today's date in the format shown in the UI
  const getTodayFormatted = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const today = new Date();
    return `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'valve-on':
      case 'burner-on':
        return 'bg-green-500';
      case 'valve-off':
      case 'burner-off':
        return 'bg-orange-400';
      case 'leak':
        return 'bg-red-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (type) => {
    switch (type) {
      case 'valve-on':
      case 'valve-off':
      case 'leak':
        return (
          <div className="bg-white rounded p-1 flex items-center justify-center">
            <span className="text-xs font-bold">LPG</span>
          </div>
        );
      case 'burner-on':
      case 'burner-off':
        return (
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-400 to-red-200">
      <header className="p-4">
        <h1 className="text-2xl font-bold">Gazo: We make your kitchens safe</h1>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4 flex space-x-2">
              <button 
                onClick={() => setTimeRange('hourly')}
                className={`py-2 px-6 rounded-md ${timeRange === 'hourly' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                Hourly
              </button>
              <button 
                onClick={() => setTimeRange('weekly')}
                className={`py-2 px-6 rounded-md ${timeRange === 'weekly' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                Weekly
              </button>
              <button 
                onClick={() => setTimeRange('monthly')}
                className={`py-2 px-6 rounded-md ${timeRange === 'monthly' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                Monthly
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Gas Usage</h2>
              <div className="h-48 flex items-end justify-between space-x-2">
                {usageData.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-orange-400 w-full rounded-t-sm"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Daily Usage Log</h2>
                <div className="text-sm flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {getTodayFormatted()}
                </div>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {activityLogs.map((log, index) => (
                  <div key={index} className={`${getStatusColor(log.type)} text-white p-3 rounded-lg flex items-center`}>
                    {getStatusIcon(log.type)}
                    <div className="ml-3">
                      <div className="text-sm font-light">{log.timestamp}</div>
                      <div className="font-medium">{log.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-white p-4 shadow-lg">
        <div className="flex justify-around">
          <Link to="/dashboard" className="text-gray-500 hover:text-red-500">Home</Link>
          <Link to="/stats" className="text-red-500 font-semibold">Stats</Link>
          <button className="text-gray-500 hover:text-red-500">Settings</button>
          <button className="text-gray-500 hover:text-red-500">Profile</button>
        </div>
      </footer>
    </div>
  );
};

export default StatsPage;